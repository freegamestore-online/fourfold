import { expect, test } from "playwright/test";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { puzzleForDate } from "../src/daily/date.ts";

const screenshotDir = resolve("screenshots/mobile");

for (const colorScheme of ["light", "dark"] as const) {
  test(`${colorScheme} mode renders the daily, archive, and result screens on a phone`, async ({ browser }) => {
    await mkdir(screenshotDir, { recursive: true });
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      colorScheme,
      serviceWorkers: "block",
    });
    const page = await context.newPage();
    const consoleErrors: string[] = [];
    await page.addInitScript(() => {
      const fixedNow = new Date("2026-10-18T12:00:00.000Z").getTime();
      const NativeDate = Date;
      class FixedDate extends NativeDate {
        constructor(...args: ConstructorParameters<typeof Date>) {
          if (args.length === 0) super(fixedNow);
          else super(...args);
        }

        static now() {
          return fixedNow;
        }
      }
      window.Date = FixedDate;
      Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
      Object.defineProperty(window, "__sharedText", { configurable: true, writable: true, value: "" });
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async (text: string) => { window.__sharedText = text; } },
      });
    });
    await page.route("https://auth.freegamestore.online/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: {
          "access-control-allow-origin": "http://127.0.0.1:4183",
          "access-control-allow-credentials": "true",
        },
        body: JSON.stringify(null),
      }),
    );
    await page.route("https://leaderboard.freegamestore.online/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: {
          "access-control-allow-origin": "http://127.0.0.1:4183",
          "access-control-allow-credentials": "true",
        },
        body: JSON.stringify({ scores: [] }),
      }),
    );
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => consoleErrors.push(error.message));

    await page.goto("/");
    await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
    await expect(page.getByText("Fourfold")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: resolve(screenshotDir, `${colorScheme}-daily.png`) });
    await expectNoHorizontalOverflow(page);

    await page.getByRole("button", { name: "Archive" }).click();
    await expect(page.getByRole("heading", { name: "Archive" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Play" }).first()).toBeVisible();
    await page.screenshot({ path: resolve(screenshotDir, `${colorScheme}-archive.png`) });
    await expectNoHorizontalOverflow(page);
    await page.getByRole("button", { name: "Back to today" }).click();

    const date = "2026-10-18";
    const puzzle = puzzleForDate(date);
    const firstGroup = puzzle.groups[0]!;
    const otherWord = puzzle.groups[1]!.words[0]!;
    for (const word of firstGroup.words.slice(0, 3)) {
      await page.getByRole("button", { name: word, exact: true }).click();
    }
    await page.getByRole("button", { name: otherWord, exact: true }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByRole("status").filter({ hasText: "One Away" })).toBeVisible();
    await page.getByRole("button", { name: "Deselect all" }).click();

    for (const group of puzzle.groups) {
      for (const word of group.words) await page.getByRole("button", { name: word, exact: true }).click();
      await page.getByRole("button", { name: "Submit" }).click();
    }
    await expect(page.getByRole("heading", { name: "Solved!" })).toBeVisible();
    await expect(page.locator(".celebration")).toBeHidden();
    const shareButton = page.getByRole("button", { name: "Share" });
    await expect(shareButton).toHaveText("Share");
    await expect(page.locator(".stats-line")).toContainText("Played 1");
    await shareButton.click();
    await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
    const sharedText = await page.evaluate(() => window.__sharedText);
    expect(sharedText).toContain("Fourfold #3");
    expect(sharedText).toContain(page.url());
    expect(sharedText).toContain("🟨🟨🟨🟨");
    for (const group of puzzle.groups) {
      for (const word of group.words) expect(sharedText).not.toContain(word);
    }
    await page.mouse.move(0, 0);
    await page.screenshot({ path: resolve(screenshotDir, `${colorScheme}-result.png`) });
    await expectNoHorizontalOverflow(page);
    expect(consoleErrors, `browser console errors in ${colorScheme} mode`).toEqual([]);
    await context.close();
  });

  test(`${colorScheme} mode shows the game-over state after four wrong guesses on a phone`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      colorScheme,
      serviceWorkers: "block",
    });
    const page = await context.newPage();
    await page.addInitScript(() => {
      const fixedNow = new Date("2026-10-18T12:00:00.000Z").getTime();
      const NativeDate = Date;
      class FixedDate extends NativeDate {
        constructor(...args: ConstructorParameters<typeof Date>) {
          if (args.length === 0) super(fixedNow);
          else super(...args);
        }
        static now() { return fixedNow; }
      }
      window.Date = FixedDate;
    });
    await page.goto("/");
    const puzzle = puzzleForDate("2026-10-18");
    for (let attempt = 0; attempt < 4; attempt++) {
      for (const group of puzzle.groups) {
        await page.getByRole("button", { name: group.words[attempt]!, exact: true }).click();
      }
      await page.getByRole("button", { name: "Submit" }).click();
      if (attempt < 3) await page.getByRole("button", { name: "Deselect all" }).click();
    }
    await expect(page.getByRole("heading", { name: "Out of mistakes" })).toBeVisible();
    await context.close();
  });
}

declare global {
  interface Window {
    __sharedText: string;
  }
}

async function expectNoHorizontalOverflow(page: import("playwright/test").Page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth, "document should not overflow horizontally").toBeLessThanOrEqual(
    dimensions.clientWidth,
  );
}

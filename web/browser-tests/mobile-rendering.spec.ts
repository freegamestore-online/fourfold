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
    await page.screenshot({ path: resolve(screenshotDir, `${colorScheme}-archive.png`) });
    await expectNoHorizontalOverflow(page);
    await page.getByRole("button", { name: "Back to today" }).click();

    const date = "2026-10-18";
    const puzzle = puzzleForDate(date);
    for (const group of puzzle.groups) {
      for (const word of group.words) await page.getByRole("button", { name: word, exact: true }).click();
      await page.getByRole("button", { name: "Submit" }).click();
    }
    await expect(page.getByRole("heading", { name: "Solved!" })).toBeVisible();
    await expect(page.locator(".celebration")).toBeHidden();
    const shareButton = page.getByRole("button", { name: "Share" });
    await expect(shareButton).toHaveText("Share");
    await page.mouse.move(0, 0);
    await page.screenshot({ path: resolve(screenshotDir, `${colorScheme}-result.png`) });
    await expectNoHorizontalOverflow(page);
    expect(consoleErrors, `browser console errors in ${colorScheme} mode`).toEqual([]);
    await context.close();
  });
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

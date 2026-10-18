import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./browser-tests",
  reporter: "list",
  outputDir: "./test-results/mobile",
  use: {
    baseURL: "http://127.0.0.1:4183",
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    serviceWorkers: "block",
  },
  webServer: {
    command: "pnpm preview --host 127.0.0.1 --port 4183 --strictPort",
    url: "http://127.0.0.1:4183",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});

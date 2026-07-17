import { test, expect } from "@playwright/test";

test.describe("screencast partial steps", () => {
  test("saves only some part from the test", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await page.screencast.start({
      path: test.info().outputPath("video.webm"),
    });
    await page.getByRole("link", { name: "Get started" }).click();

    await expect(
      page.getByRole("heading", { name: "Playwright enables reliable" }),
    ).toBeVisible();
    await page.screencast.showActions({
      cursor: "pointer",
      position: "top-right",
    });

    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "How to install Playwright" }).click();
    await expect(
      page.getByRole("heading", { name: "Installing PlaywrightDirect" }),
    ).toBeVisible();
    await page.getByRole("tab", { name: "pnpm" }).nth(3).click();
    await expect(
      page
        .getByRole("code")
        .filter({ hasText: "pnpm exec playwright test --ui" }),
    ).toBeVisible();

    await page.screencast.stop();

    await page
      .getByRole("link", { name: "Write tests using web-first" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Writing tests" }),
    ).toBeVisible();
    await page
      .getByRole("link", { name: "How to write the first test" })
      .click();
    await expect(
      page.getByRole("heading", { name: "First testDirect link to" }),
    ).toBeVisible();
  });
});

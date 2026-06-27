import { test, expect } from "@playwright/test";

test("on demand screenshot test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const link = await page.getByRole("link", { name: /Get started/ });
  await expect(link).toBeVisible();
  // await page.screenshot({ path: "tests/screenshots/page.png" });
  await page.close();
});

test("screenshot on failure test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const link = await page.getByRole("link", { name: /Get started/ });
  await expect(link).not.toBeVisible();
  await page.close();
});

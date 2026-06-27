import { test, expect } from "@playwright/test";

test("Test Locator Strategy", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator("id=user-name").fill("standard_user");
  await page.locator("id=password").fill("secret_sauce");
});

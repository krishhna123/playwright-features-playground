import { test, expect } from "@playwright/test";

test("textbox test", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.getByPlaceholder("Username").pressSequentially("Admin");
  await page
    .getByPlaceholder("Password")
    .pressSequentially("admin123", { delay: 100 });
  await page.getByPlaceholder("Password").press("Enter");
});

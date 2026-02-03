import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  // Ensure the environment variable is loaded and defined before filling the field.
  // Playwright Test automatically loads variables from .env if present.
  // Add a fallback or throw an error if not defined:
  const username = process.env.USERNAME;
  if (!username) {
    throw new Error("USERNAME is not defined in the environment variables.");
  }
  await page.getByPlaceholder("Username").fill(username);
  await page.getByPlaceholder("Password").fill(process.env.PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .getByRole("banner")
    .getByRole("img", { name: "profile picture" })
    .click();
  await page.locator("text=Logout").click();
});

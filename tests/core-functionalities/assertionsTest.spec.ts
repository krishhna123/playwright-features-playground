import { test, expect } from "@playwright/test";

test("element is hidden", async ({ page }) => {
  await page.goto("https://sripriyakulkarni.com/");
  await page.locator("text=Automation Practice").click();
  await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();
  await page.close();
});

test("element is present", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await expect(page.locator('//button[text()="Delete"]')).toHaveCount(0);
  await page.locator("button").click();
  await expect(page.locator('//button[text()="Delete"]')).toHaveCount(1);
  await page.close();
});

test("element is enabled", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#position")).toBeEnabled();
  await expect(page.locator('//button[text()="Disabled"]')).toBeDisabled();
  await page.close();
});

test("element has text", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  const button = await page.locator("#color");
  await expect(button).toHaveText("What is my color?");
  await expect(button).not.toHaveText("What is my color");
  await page.close();
});

test("element has an attribute", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page.getByPlaceholder("Username")).toHaveAttribute(
    "name",
    "username"
  );
  await expect(page.getByPlaceholder("Password")).toHaveAttribute(
    "type",
    "password"
  );
  await page.close();
});

test("page url and title", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveURL(/demo.orangehrmlive/);
  await expect(page).toHaveTitle("OrangeHRM");
  await page.close();
});

test("page screenshot", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page).toHaveScreenshot();
  await page.close();
});

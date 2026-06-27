import { test, expect } from "@playwright/test";

test("checkbox test", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/forms.html");
  const pythonCheckbox = await page.locator("#check_python");
  const javascriptCheckbox = await page.locator("#check_javascript");

  // assertion
  expect(await pythonCheckbox.isChecked()).toBeFalsy();
  expect(await javascriptCheckbox.isChecked()).toBeFalsy();

  // assertion
  await expect(pythonCheckbox).not.toBeChecked();
  await expect(javascriptCheckbox).not.toBeChecked();

  await pythonCheckbox.check();
  expect(await pythonCheckbox.isChecked()).toBeTruthy();
  await expect(pythonCheckbox).toBeChecked();

  await page.close();
});

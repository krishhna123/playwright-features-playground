import { test, expect } from "@playwright/test";

test("radio button test", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/forms.html");
  const seleniumRadioButton = await page.locator("#rad_selenium");
  const protractorRadioButton = await page.locator("#rad_protractor");

  // assertion
  expect(await seleniumRadioButton.isChecked()).toBeFalsy();
  expect(await protractorRadioButton.isChecked()).toBeFalsy();

  // assertion
  await expect(seleniumRadioButton).not.toBeChecked();
  await expect(protractorRadioButton).not.toBeChecked();

  await seleniumRadioButton.check();
  expect(await seleniumRadioButton.isChecked()).toBeTruthy();
  await expect(seleniumRadioButton).toBeChecked();
});

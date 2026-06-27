import { test, expect } from "@playwright/test";

test("Test static dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.selectOption("#Skills", { value: "Android" });
  await page.pause();
  await page.selectOption("#Skills", { label: "Art Design" });
  await page.pause();
  await page.selectOption("#Skills", { index: 3 });
  await page.pause();
  await page.close();
});

test("test multiselect dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", [
    { value: "New York" },
    { label: "Pennsylvania" },
    { index: 0 },
  ]);
  await page.pause();
  await page.close();
});

test("Test searchable dynaminc dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator("span[role='combobox']").click();
  await page.locator("input.select2-search__field").fill("India");
  await page.locator("input.select2-search__field").press("Enter");
  await page.pause();
  await page.close();
});

test("test non searchable dynamic dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator("span[role='combobox']").click();
  await page.pause();

  await page
    .locator("ul#select2-country-results")
    .locator("li", { hasText: "India" })
    .click();
  await page.pause();
  await page.close();
});

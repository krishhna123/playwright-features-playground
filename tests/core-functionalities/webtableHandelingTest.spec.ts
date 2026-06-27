import { test, expect } from "@playwright/test";

const selectProdcut = async (rows, page, productName) => {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: productName,
  });
  const checkbox = await matchedRow.locator('td input[type="checkbox"]');
  await checkbox.check();
};

test("Webtable Handeling Test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator('//table[@name="BookTable"]');

  // total rows and columns
  const totalRows = await table.locator("tbody tr").count();
  const totalColumns = await table.locator("tr th").count();

  expect(totalRows).toBe(7);
  expect(totalColumns).toBe(4);
});

test("selecting single checkbox from the table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");
  const columns = await table.locator("tr th");
  const rows = await table.locator("tbody tr");

  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 3",
  });
  const checkbox = await matchedRow.locator('td input[type="checkbox"]');
  await checkbox.check();
});

test("select multiple checkboxes from the table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");
  const rows = await table.locator("tbody tr");
  await selectProdcut(rows, page, "Product 1");
  await selectProdcut(rows, page, "Product 3");
  await page.close();
});

test("print product names form page 1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");
  const rows = await table.locator("tbody tr");
  const columns = await table.locator("tr th");

  for (let i = 0; i <= (await rows.count()); i++) {
    const row = rows.nth(i);
    const rowData = await row.locator("td");
    for (let j = 0; j < (await rowData.count()); j++) {
      const cell = rowData.nth(j);
      console.log(await cell.innerText());
    }
  }

  await page.close();
});

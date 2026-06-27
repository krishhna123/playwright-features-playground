import { test, expect } from "@playwright/test";

test("Drag and Drop Test", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  const source = await page.locator("#draggable");
  const target = await page.locator("#simpleDropContainer #droppable");

  await source.hover();
  await page.mouse.down();

  await target.hover();
  await page.mouse.up();

  await page.waitForTimeout(5000);
});

test("Drag and Drop Test with Drag and Drop Helper", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  const source = await page.locator("#draggable");
  const target = await page.locator("#simpleDropContainer #droppable");

  await target.dragTo(source);
  await page.waitForTimeout(5000);
});

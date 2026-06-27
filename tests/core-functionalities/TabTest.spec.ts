import { test, expect } from "@playwright/test";

test("single tab test", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click("button:has-text('click')"),
  ]);
  await newTab.waitForLoadState();
  await newTab.locator(".DocSearch-Button-Placeholder").click();
  await newTab.locator(".DocSearch-Button-Placeholder").fill("Playwright");
  await newTab.waitForTimeout(3000);
  await newTab.close();
});

test("multiple tabs test", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  await page.locator('.analystic[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click("button[onclick='multiwindow()']"),
  ]);

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();

  console.log("Number of tabs opened: ", pages.length);

  await pages[1].locator("#email").fill("playwright@gmail.com");
  await multipleTab.waitForTimeout(3000);

  await pages[2].locator(".DocSearch-Button-Placeholder").click();

  await pages[1].close();
  await pages[2].close();
});

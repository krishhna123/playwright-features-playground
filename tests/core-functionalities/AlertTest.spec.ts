import { test, expect } from "@playwright/test";

test("simple alert test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.locator("text=Click for JS Alert").click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
  await page.close();
});

test("text in alert message", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.locator("text=Click for JS Alert").click();

  page.on("dialog", async (alert) => {
    const message = alert.message();
    expect(message).toBe("I am a JS Alert");
    await alert.accept();
    await expect(page.locator("#result")).toHaveText(
      "You successfully clicked an alert"
    );
  });
  await page.close();
});

test("accept alert test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.locator("text=Click for JS Confirm").click();
  page.on("dialog", async (alert) => {
    const message = alert.message();
    expect(message).toBe("I am a JS Confirm");
    await alert.accept();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
  await page.close();
});

test("dismiss alert test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.locator("text=Click for JS Confirm").click();
  page.on("dialog", async (alert) => {
    const message = alert.message();
    expect(message).toBe("I am a JS Confirm");
    await alert.dismiss();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
  await page.close();
});

test("prompt alert test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.locator("text=Click for JS Prompt").click();
  page.on("dialog", async (alert) => {
    const message = alert.message();
    expect(message).toBe("I am a JS prompt");
    await alert.accept("Hello World");
    await expect(page.locator("#result")).toHaveText(
      "You entered: Hello World"
    );
  });
  await page.close();
});

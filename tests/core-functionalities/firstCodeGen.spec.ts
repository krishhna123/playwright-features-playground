import { test, expect } from "@playwright/test";

/**
 * to generate conde snippet for the test below, run: `npx playwright codegen`
 */

test("booking.com test", async ({ page }) => {
  await page.goto(
    "https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4ArmQ87EGwAIB0gIkNWI5NWQyMmQtZmMyNS00ZGE3LTgwNDUtMzM4NTRhYWQ3ODgy2AIF4AIB&sid=ab592cbc037aaeb7ac96bfee682a81d7&keep_landing=1&sb_price_type=total&"
  );
  await page.getByPlaceholder("Where are you going?").click();
  await page.getByRole("button", { name: "Goa India" }).click();
  await page.getByLabel("11 May").click();
  await page.getByLabel("13 May").click();
  await page.getByTestId("occupancy-config").click();
  await page
    .locator("div")
    .filter({ hasText: /^2$/ })
    .locator("button")
    .nth(1)
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^3$/ })
    .locator("button")
    .nth(1)
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^0$/ })
    .locator("button")
    .nth(1)
    .click();
  await page
    .getByTestId("kids-ages-select")
    .getByRole("combobox")
    .selectOption("2");
  await page
    .locator("div")
    .filter({ hasText: /^Rooms1$/ })
    .locator("button")
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Done" }).click();
  await page.getByRole("button", { name: "Search" }).click();
  const page2Promise = page.waitForEvent("popup");
  await page.locator(".da8b337763 > .a83ed08757").first().click();
  const page2 = await page2Promise;
  await page2.getByRole("button", { name: "Reserve your resort stay" }).click();
});

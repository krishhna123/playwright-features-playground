import { test, expect } from "@playwright/test";
import { createOverlay } from "./helper";

test.use({
  baseURL: "https://ovcharski.com/shop",
  video: {
    mode: "on",
    show: {
      actions: {},
      test: { position: "top" },
    },
  },
});

test.describe("screencast functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("save videos by default with screencast", async ({ page }) => {
    await page.getByRole("searchbox", { name: "Search for:" }).press("Enter");
    await page
      .getByRole("link", { name: "Jenkins Actor Jenkins Actor" })
      .first()
      .click();

    await page.getByRole("link", { name: "online shop logo" }).click();
  });

  test("save chapters", async ({ page }) => {
    await page.screencast.showChapter("Navigating to shop page", {
      description:
        "Navigating to shop page to search for Album and add it to the cart",
    });

    await page.getByRole("link", { name: "Shop", exact: true }).first().click();
    await page.getByRole("link", { name: "Album Album 15,00 €" }).click();
    await expect(page.getByRole("heading", { name: "Album" })).toBeVisible();

    await page.getByRole("spinbutton", { name: "Product quantity" }).fill("2");
    await page
      .getByRole("button", { name: "Add to cart", exact: true })
      .click();
    await expect(page.getByText("2 × “Album” have been added")).toBeVisible();
    await expect(page.getByText("Subtotal: 30,00 €")).toBeVisible();

    await page.screencast.showChapter("Navigating to cart page", {
      description: "Navigating to cart page and validate prices",
      duration: 1000,
    });
    await page.getByRole("link", { name: "View cart" }).nth(1).click();
    await expect(
      page.getByRole("row", { name: "Subtotal 30,00 €" }),
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: "Total 30,00 €", exact: true }),
    ).toBeVisible();

    await page.screencast.showChapter("Navigating to checkout page", {
      description: "Navigating to checkout page and validate prices",
      duration: 500,
    });

    await page.getByRole("link", { name: /Proceed to checkout/ }).click();

    await expect(page.getByRole("heading", { name: "Checkout" })).toBeVisible();
    await expect(
      page
        .getByRole("row", { name: "Total 30,00 €", exact: true })
        .getByRole("cell"),
    ).toBeVisible();
  });

  test("validate overlay", async ({ page }) => {
    await page.screencast.showOverlay(
      createOverlay(
        "STEP 1: Navigating to shop page and adding 2 albums to the cart",
      ),
      { duration: 2000 },
    );
    await page.getByRole("link", { name: "Shop", exact: true }).first().click();
    await page.getByRole("link", { name: "Album Album 15,00 €" }).click();
    await expect(page.getByRole("heading", { name: "Album" })).toBeVisible();
    await page.getByRole("spinbutton", { name: "Product quantity" }).fill("2");
    await page
      .getByRole("button", { name: "Add to cart", exact: true })
      .click();
    await expect(page.getByText("2 × “Album” have been added")).toBeVisible();
    await expect(page.getByText("Subtotal: 30,00 €")).toBeVisible();

    await page.screencast.showOverlay(
      createOverlay("STEP 2: Navigating to cart page and validating prices"),
      { duration: 2000 },
    );
    await page.getByRole("link", { name: "View cart" }).nth(1).click();
    await expect(
      page.getByRole("row", { name: "Subtotal 30,00 €" }),
    ).toBeVisible();
    await expect(
      page.getByRole("row", { name: "Total 30,00 €", exact: true }),
    ).toBeVisible();

    await page.screencast.showOverlay(
      createOverlay("STEP 3: Navigating to checkout page"),
      { duration: 2000 },
    );
    await page.getByRole("link", { name: /Proceed to checkout/ }).click();
    await expect(page.getByRole("heading", { name: "Checkout" })).toBeVisible();
    await expect(
      page
        .getByRole("row", { name: "Total 30,00 €", exact: true })
        .getByRole("cell"),
    ).toBeVisible();
  });
});

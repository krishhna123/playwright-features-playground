import { test } from "@playwright/test";
/**
 * command to run test `npx playwright test tests/TagsTest.spec.ts GREP=@regression`
 */

test("login page @smoke", async ({}) => {
  console.log("login page");
});

test("home page @regression", async ({}) => {
  console.log("home page");
});

test("profile page @smoke @sanity", async ({}) => {
  console.log("profile page");
});

test("settings page", { tag: "@saniy" }, async ({}) => {
  console.log("settings page");
});

test("checkout page", { tag: "@regression" }, async ({}) => {
  console.log("checkout page");
});

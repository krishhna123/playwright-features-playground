import { test } from "@playwright/test";

/**
 * skip
 * skip with condition
 * fail : fail without condition
 * fail with condition : Conditionally fail
 * fix me : test to be fixed and will not execute
 * slow : marks test as slow. Slow tests are given triple of default timeout
 * slow with condition : Conditionally marks test as slow
 * only : run only this test
 */

test.skip("Skip test", async ({}) => {
  console.log("Skip test");
});

test("Skip test with condition", async ({ page, browserName }) => {
  test.skip(
    browserName === "webkit",
    "this feature is not implemented for mac"
  );
  console.log("Skip test with condition");
});

test("Fail test", async ({}) => {
  test.fail();
});

test("Fail test with condition", async ({ browserName }) => {
  test.fail(
    browserName === "webkit",
    "this feature is not implemented for mac"
  );
});

test.fixme("Fix me test", async ({}) => {
  console.log("Fix me test");
});

test("Slow test", async ({}) => {
  test.slow();
  console.log("Slow test");
});

test("Slow test with condition", async ({ browserName }) => {
  test.slow(
    browserName === "webkit",
    "this feature is not implemented for mac"
  );
  console.log("Slow test with condition");
});

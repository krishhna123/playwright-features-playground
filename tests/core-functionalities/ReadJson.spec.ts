import { test } from "@playwright/test";
import * as userData from "./testData/person.json";

test("Read JSON file", async ({ page }) => {
  console.log(userData);
});

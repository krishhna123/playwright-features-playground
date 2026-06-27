import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const personData = parse(
  fs.readFileSync(path.join(__dirname, "testData", "person.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);

for (const person of personData) {
  test(`foo: ${person.name}`, async ({ page }) => {
    console.log(person.name, person.age);
  });
}

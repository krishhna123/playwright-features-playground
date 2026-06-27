import { test } from "@playwright/test";
import { it } from "node:test";

const data = [
  { name: "Bob", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 },
];

data.forEach((person) => {
  it(`should display ${person.name} age`, async ({}) => {
    console.log(person.name, person.age);
  });
});

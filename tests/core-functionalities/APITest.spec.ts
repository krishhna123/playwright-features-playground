import { test, expect } from "@playwright/test";

test("Get user data", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty("data");
  expect(responseBody.data[0].first_name).toBe("Michael");
});

test("Create, update and delete user", async ({ request }) => {
  const user = {
    name: "morpheus",
    job: "leader",
  };

  const response = await request.post("https://reqres.in/api/users", {
    data: user,
    headers: {
      ACCEPT: "application/json",
    },
  });
  const responseBody = await response.json();
  expect(response.status()).toBe(201);
  expect(responseBody.name).toBe(user.name);
  expect(responseBody.job).toBe(user.job);
  expect(responseBody).toHaveProperty("id");
  expect(responseBody).toHaveProperty("createdAt");

  const updatedUser = {
    name: "morpheus",
    job: "developer",
  };

  const updateResponse = await request.put(
    `https://reqres.in/api/users/${responseBody.id}`,
    {
      data: updatedUser,
      headers: {
        ACCEPT: "application/json",
      },
    }
  );

  const updateResponseBody = await updateResponse.json();
  expect(updateResponse.status()).toBe(200);
  expect(updateResponseBody.name).toBe(updatedUser.name);
  expect(updateResponseBody.job).toBe(updatedUser.job);

  const deleteResponse = await request.delete(
    `https://reqres.in/api/users/${responseBody.id}`
  );
  expect(deleteResponse.status()).toBe(204);
});

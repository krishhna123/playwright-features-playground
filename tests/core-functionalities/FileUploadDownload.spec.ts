import { test } from "@playwright/test";

test("File upload and download test", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileDownload.html");
  await page.locator("#textbox").click();
  await page.locator("#textbox").pressSequentially("testetest");
  await page.locator("#createTxt").click();

  const download = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#link-to-download").click(),
  ]);

  const path = await download[0].path();
  console.log(path);

  // way 1 to keep file
  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(`./downloads/${fileName}`);


  // way 2 to keep file
  const customName = "customName";
  await download[0].saveAs(`./downloads/${customName}.pdf`);
});

test("File upload test", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileUpload.html");

  const uploadFile = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("input[name='files[]]").click(),
  ]);
  await uploadFile[0].setFiles("./assets/test.txt");
  await page.waitForTimeout(5000);
});

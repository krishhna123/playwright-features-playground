import { test, expect, Frame } from "@playwright/test";

test("IFrame Test", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames");

  // find all numbers of frame
  const frames = await page.frames();
  console.log("Number of frames: ", frames.length);

  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/iframe1",
  });
  // const frame1 = page.frameLocator('locator');
  await frame1?.locator('input[name="mytext1]').fill("Playwright");

  await page.waitForTimeout(3000);
  await page.close();
});

test("nested frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames");
  const frame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/iframe3",
  });

  const nestedFrame : Frame[]= frame?.childFrames() || [];

  await nestedFrame[0].locator("locatory of element").check();
});

import {test,expect} from '@playwright/test';
import { allure, LabelName } from "allure-playwright";

test.describe.parallel('Login Page Suite',()=>{

    test.beforeEach(async ({page}) => {
        await page.goto("/");
    })

    test.afterEach(async ({page}) => {
        await page.close();
    })

    test('Fetch the URL',async ({page},testInfo)=>{
      allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
      allure.id("1");
      allure.epic("Landing Page Epic");
      allure.story("Landing Page Story");
      await expect(page).toHaveURL("http://zero.webappsecurity.com/");
    })


    test('Validate and Click online Banking',async ({page},testInfo)=>{
      allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
      allure.id("2");
      allure.epic("Landing Page Epic");
      allure.story("Online Page Verification");
      const onlineTab =await page.locator("//div[@class='span3']//h4[contains(text(),'Online Banking')]");
      expect (await onlineTab.textContent()).toContain("Online Banking");
      await page.click("#online-banking");
    })
})
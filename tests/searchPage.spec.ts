import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { allure, LabelName } from "allure-playwright";

test.describe('Search Results', () => {
  test('Should find search results', async ({ page }) => {
    allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
    allure.id("6");
    allure.epic("Search Epic");
    let homePage: HomePage = new HomePage(page)
    await homePage.visit();
    await homePage.searchFor('bank');
    allure.story("Search for bank");
    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
  })
})

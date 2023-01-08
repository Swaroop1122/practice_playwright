import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'
import { allure, LabelName } from "allure-playwright";

test.describe('Transfer Funds and Make Payments', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)

    homePage.visit();
    homePage.clickOnSignIn();
    loginPage.login('username', 'password');
    homePage.visit();
  })

  test('Transfer funds', async ({ page }) => {
    allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
    allure.id("7");
    allure.epic("Fund transfer Epic");
    allure.story("Transferring fund to selected account");
    await page.click('#transfer_funds_tab');
    await page.selectOption('#tf_fromAccountId', '2');
    await page.selectOption('#tf_toAccountId', '3');
    await page.type('#tf_amount', '500');
    await page.type('#tf_description', 'Test message')
    await page.click('#btn_submit');

    const boardHeader = await page.locator('h2.board-header');
    await expect(boardHeader).toContainText('Verify');
    await page.click('#btn_submit');

    const message = await page.locator('.alert-success');
    await expect(message).toContainText(
      'You successfully submitted your transaction'
    );
  })
})

import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'
import { PaymentPage } from '../page-objects/PaymentPage'
import { Navbar } from '../page-objects/Navbar'
import { allure, LabelName } from "allure-playwright";

test.describe('New Payment', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let paymentPage: PaymentPage
  let navbar: Navbar

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    homePage.visit();
    homePage.clickOnSignIn();
    loginPage.login('username', 'password');
    await page.waitForTimeout(2000);
    homePage.visit();
    await page.waitForTimeout(2000);
  })

  test('Should send new payment', async ({ page }) => {
    allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
    allure.id("5");
    allure.epic("Payment Epic");
    allure.story("New payment");
    navbar.clickOnTab('Pay Bills');
    await paymentPage.createPayment();
    await paymentPage.assertSuccessMessage();
  })
})

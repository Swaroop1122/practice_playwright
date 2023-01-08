import {test,expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { allure, LabelName } from "allure-playwright";

test.describe.parallel('Login Logout Flow' , ()=>{
    let loginPage: LoginPage
    let homePage: HomePage
    test.beforeEach(async ({page})=>{
       loginPage = new LoginPage(page);
       homePage = new HomePage(page);
       await homePage.visit();
    })

    test('Negative test for Login',async ()=>{
        allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
        allure.id("3");
        allure.epic("Login Page Epic");
        allure.story("Positive Login Page Story");
        await homePage.clickOnSignIn();
        await loginPage.login("invaliduser","invalidpass");
        await loginPage.validateErrorMessage();
    })

    test('Positive test for Login',async ()=>{
        allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
        allure.id("4");
        allure.epic("Login Page Epic");
        allure.story("Negative Login Page Story");
        await homePage.clickOnSignIn();
        await loginPage.login("username","password");
    })
})
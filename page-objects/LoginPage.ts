import {expect, Locator,Page} from '@playwright/test'

export class LoginPage{

    //Define variables
    readonly page: Page
    readonly userName: Locator
    readonly passWord: Locator
    readonly submitBtn: Locator
    readonly errorMsg: Locator

    //Initialize variables / locators using page
    constructor(page:Page){
        this.page=page
        this.userName=page.locator("#user_login");
        this.passWord=page.locator("#user_password");
        this.submitBtn=page.locator("text='Sign in'");
        this.errorMsg=page.locator('.alert-error');
    }

    //Define login page methods

    async login(username:string,password:string){
        await this.userName.type(username);
        await this.passWord.type(password);
        await this.submitBtn.click();
    }

    async validateErrorMessage(){
        await expect(this.errorMsg).toContainText("password are wrong");
    }
}
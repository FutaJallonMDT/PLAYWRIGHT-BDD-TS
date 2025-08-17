import { Page, Locator, expect } from '@playwright/test';


export class loginDemoPages {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

 
   constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');    

  }

  async expectOnLoginPage() {
  await expect(this.page).toHaveURL('https://www.saucedemo.com/');

  }

  async EnterUserloginDetails(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

}
import { Given, When, Then } from '@cucumber/cucumber';
import {Page, Browser, ChromiumBrowser, expect, chromium } from '@playwright/test'
import {loginDemoPages} from '../pages/loginDemoPages'; 


let lpage : loginDemoPages;


 Given('I have accessed the Swag Lab Login Page', async function () {
           lpage = new loginDemoPages(this.page);
           await lpage.expectOnLoginPage();
         });

  When('a user enters the username {string}, the password {string}, and clicks on login button', async function (user, pass) {
            await lpage.EnterUserloginDetails(user, pass)
         });

 
         
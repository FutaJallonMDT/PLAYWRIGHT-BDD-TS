import { Given, When, Then } from '@cucumber/cucumber';
import {Page, Browser, ChromiumBrowser, expect, chromium } from '@playwright/test'
import { checkoutPage } from '../pages/checkoutPage'; 

let chckoutpage : checkoutPage;

     Then('I should Navigate to the Checkout Page', async function () {
         chckoutpage = new checkoutPage(this.page)
         await expect(chckoutpage.checkoutHeader).toBeVisible();
         });

         Then('I Enter the Checkout Information', async function (dataTable) {
          const [ row ] = dataTable.hashes(); 
          const { FNAME, LNAME, ZIPCODE } = row;

          await chckoutpage.fillUserInformation(FNAME, LNAME, ZIPCODE);
         });

         Then('Click On the Continue Button', async function () {
          await chckoutpage.continueBtn.click()
         });

         Then('Click on Finish Button', async function () {
           await chckoutpage.finishBtn.click()
         });
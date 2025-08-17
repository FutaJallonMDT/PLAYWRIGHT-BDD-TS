import { Given, When, Then } from '@cucumber/cucumber';
import {Page, Browser, ChromiumBrowser, expect, chromium } from '@playwright/test'
import { ProductDemoPages } from '../pages/productPage';
import { ppid } from 'process';

let PPage : ProductDemoPages;

Then('I should Navigate to the Product Page', async function () {
    PPage = new ProductDemoPages(this.page);
    await PPage.verifyProductPageHeader();
         });


          Then('I Add Two products to the basket', async function () {
           const products = ['Sauce Labs BackPack', 'Sauce Labs Bike Light'];
           await PPage.addProductinCart();
         });

        
        When('I Click on the Shopping Cart to view the Basket', { timeout: 20000 }, async function () {
              await expect(PPage.cartBasket).toBeVisible();
              await PPage.cartBasket.click();
});

      Then('I should see {int} products in the basket', async function (productCount: number) {
       await PPage.verifyBasketItemCount(productCount);
});

 Then('I Click on Checkout button', async function () {
          await PPage.checkoutBtn.click()
         });
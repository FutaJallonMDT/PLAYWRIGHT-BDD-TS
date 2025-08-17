import { Page, Locator, expect } from '@playwright/test';

export class ProductDemoPages{

    readonly page: Page;
    readonly productHeader: Locator
    readonly addbackpack: Locator
    readonly addbikeLight: Locator
    readonly cartBasket: Locator
    readonly cartinventroyItem: Locator
    readonly checkoutBtn : Locator
  

    constructor(page: Page) {
    this.page = page;
    this.productHeader = page.locator('[data-test="title"]');
    this.addbackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addbikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.cartBasket = page.locator('[data-test="shopping-cart-link"]');
    this.cartinventroyItem = page.locator('[data-test="inventory-item"]');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    
  }

   async verifyProductPageHeader(){
    await expect(this.productHeader).toBeVisible();
  }

  async addProductinCart(){
    await this.addbackpack.click()
    await this.addbikeLight.click()
  }

  async addProductinCarts(productNames: string[]) {
  for (const name of productNames) {
    const formattedName = name.toLowerCase().replace(/ /g, '-');
    const selector = `[data-test="add-to-cart-${formattedName}"]`;
    const addButton = this.page.locator(selector);
    await addButton.click();
  }  
}

async verifyBasketItemCount(expectedCount: number) {
  await expect(this.cartinventroyItem).toHaveCount(expectedCount);
}

}


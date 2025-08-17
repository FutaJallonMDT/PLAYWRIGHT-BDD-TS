import { Page, Locator, expect } from '@playwright/test';

export class checkoutPage{

    readonly page: Page;
    readonly checkoutHeader: Locator
    readonly fname: Locator
    readonly Lname: Locator
    readonly pstcode: Locator
    readonly continueBtn: Locator
    readonly finishBtn: Locator

    constructor(page: Page) {
    this.page = page; 
    this.checkoutHeader = page.locator('[data-test="title"]');  
    this.fname = page.locator('[placeholder="First Name"]');
    this.Lname = page.locator('[placeholder="Last Name"]');
    this.pstcode = page.locator('[placeholder="Zip/Postal Code"]')
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');


  }

  async fillUserInformation(firstName: string, lastName: string, postalCode: string) {
  await this.fname.fill(firstName);
  await this.Lname.fill(lastName);
  await this.pstcode.fill(postalCode);
}
}


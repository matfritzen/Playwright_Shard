import { Locator, Page } from "playwright";

export default class Helpers {

    readonly adminOption : Locator

    constructor(page: Page){
        this.adminOption = page.locator('.oxd-main-menu-item--name').getByText('Admin');
    }

    async clickAdminMenu(){
        await this.adminOption.click();
    }
}
import { Locator, Page } from "playwright";

export default class HomePage {

    readonly userDropdown : Locator
    readonly logoutButton : Locator

    constructor(page : Page){
        this.userDropdown = page.locator('p.oxd-userdropdown-name');
        this.logoutButton = page.getByText('Logout', {exact:true});
    }

    async doLogout(){
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}
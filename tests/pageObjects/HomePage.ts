import { Locator, Page } from "playwright";
import Helpers from "../utils/Helpers";

export default class HomePage extends Helpers {

    readonly userDropdown: Locator
    readonly logoutButton: Locator

    constructor(page: Page) {
        super(page)
        this.userDropdown = page.locator('p.oxd-userdropdown-name');
        this.logoutButton = page.getByText('Logout', { exact: true });
    }

    async doLogout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}
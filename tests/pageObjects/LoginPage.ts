import { Locator, Page } from "playwright";
import HomePage from "./HomePage";
import { expect } from "playwright/test";

export default class LoginPage extends HomePage {

    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async doLogin(username: string, password: string) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.userDropdown).toBeVisible();
    }

}
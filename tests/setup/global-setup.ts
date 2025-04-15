import { chromium, type FullConfig } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import * as testData from '../data/testData.json'

async function globalSetup(config: FullConfig) {
    const username = testData.username!;
    const password = testData.password!;
    const { baseURL, storageState } = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPage = new LoginPage(page)
    await page.goto(baseURL!);
    await loginPage.doLogin(username, password);
    await page.context().storageState({ path: storageState as string });
    await browser.close();
}

export default globalSetup;
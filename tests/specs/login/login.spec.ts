import { test, expect } from '@playwright/test';
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage';
import * as testData from '../../data/testData.json';

let loginPage: LoginPage;

test.use({ storageState: { cookies: [], origins: [] } });
test.describe('Login Test Suite', { tag: '@Regression' }, () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  })

  test('Testing environment variable setup', async () => {

    process.env.ENVIRONMENT === "qa" ? console.log("---------- QA ENVIRONMENT ---------") : console.log("---------- NO ENVIRONMENT FOUND ---------")
    process.env.TEST === "test" ? console.log("---------- TEST WORKS ---------") : console.log("---------- NO TEST FOUND ---------")
  })

  test('Login test', async ({ page }) => {
    const homePage = new HomePage(page);

    await loginPage.doLogin(testData.username, testData.password)
    await expect(homePage.userDropdown).toBeVisible();
  });


  test('Invalid Credentials ', async ({ page }) => {

    const alert = page.locator('[role="alert"]');

    await loginPage.usernameInput.fill(testData.username);
    await loginPage.passwordInput.fill(testData.invalidPassword);
    await loginPage.loginButton.click();
    await expect(alert).toBeVisible();
    await expect(alert).toHaveText('Invalid credentials');
  });

  test('Logout', { tag: '@Smoke' }, async ({ page }) => {
    const homePage = new HomePage(page);

    await loginPage.doLogin(testData.username, testData.password)
    await expect(homePage.userDropdown).toBeVisible();
    await homePage.doLogout();
    await expect(loginPage.loginButton).toBeVisible();
  });

})
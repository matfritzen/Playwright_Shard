import { test, expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import * as testData from '../data/testData.json';

let loginPage: LoginPage;

test.describe('SUITE 2', { tag: '@Regression' }, () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test('Login test', { tag: '@Smoke' }, async ({ page }) => {

    const homePage = new HomePage(page);

    await loginPage.doLogin(testData.username, testData.password)
    await expect(homePage.userDropdown).toBeVisible();
  });


  test('Invalid Credentials', { tag: '@Smoke' }, async ({ page }) => {

    const alert = page.locator('[role="alert"]');

    await loginPage.doLogin(testData.username, testData.invalidPassword)
    await expect(alert).toBeVisible();
    await expect(alert).toHaveText('Invalid credentials');
  });

  test.only('Logout', async ({ page }) => {

    const homePage = new HomePage(page);

    await loginPage.doLogin(testData.username, testData.password)
    await expect(homePage.userDropdown).toBeVisible();
    await homePage.doLogout();
    await expect(loginPage.loginButton).toBeVisible();
  });


})
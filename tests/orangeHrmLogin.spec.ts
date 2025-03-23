import { test, expect } from '@playwright/test';

test.describe('SUITE 1', {tag: '@Regression'}, () => {

  test('Testing environment variable setup', async () => {

    process.env.ENVIRONMENT === "qa" ? console.log("---------- QA ENVIRONMENT ---------") : console.log("---------- NO ENVIRONMENT FOUND ---------")
    process.env.TEST === "test" ? console.log("---------- TEST WORKS ---------") : console.log("---------- NO TEST FOUND ---------")
  })

  test('Login test - suit 1', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('.oxd-userdropdown-img')).toBeVisible();
    await page.close();
  });


  test('Invalid Credentials - suit 1 ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('aadas')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[role="alert"]')).toBeVisible();
    await page.close();
  });

  test('Logout - suit 1 ', {tag: '@Smoke'},  async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await page.locator('.oxd-userdropdown').click()
    await page.locator('.oxd-userdropdown-link').nth(3).click()
    await expect(page.locator('[name="username"]')).toBeVisible();
    await page.close();
  });

})
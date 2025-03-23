import { test, expect } from '@playwright/test';

test.describe('SUITE 2', {tag:'@Regression'},  () => {

  test('Login test', {tag: '@Smoke'}, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('.oxd-userdropdown-img')).toBeVisible();
    await page.close();
  });


  test('Invalid Credentials', {tag: '@Smoke'},  async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('aadas')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[role="alert"]')).toBeVisible();
    await page.close();
  });

  test('Logout', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await page.locator('.oxd-userdropdown').click()
    await page.locator('.oxd-userdropdown-link').nth(3).click()
    await page.close();
  });


})
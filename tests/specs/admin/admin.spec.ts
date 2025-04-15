import { test, expect } from '@playwright/test';
import Helpers from '../../utils/Helpers';

let helpers : Helpers;

test.describe('Admin Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        helpers = new Helpers(page);
        await page.goto('/');
        await helpers.clickAdminMenu();
    })

    test('Validate user is being displayed in the Records Found table', async ({ page }) => {
        
        const usernameRow = page.getByRole('cell').nth(1);

        await page.route('**/v2/admin/users?**', async route => {
            const response = await route.fetch();
            const json = await response.json();
            json.data[0].userName = 'Matheus'
            route.fulfill({response, json})
        })

        await expect(usernameRow).toHaveText('Matheus');

    })
});
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('should show theme switch', async ({ page }) => {
	await expect(page.getByTestId('theme-switch')).toBeVisible();
});

// test('should change theme to 1', async ({ page }) => {
// 	page.getByTestId('theme-switch').fill('1');
// 	await expect(page).toHaveScreenshot('theme-1.png');
// });

// test('should change theme to 2', async ({ page }) => {
// 	page.getByTestId('theme-switch').fill('2');
// 	await expect(page).toHaveScreenshot('theme-2.png');
// });

// test('should change theme to 3', async ({ page }) => {
// 	page.getByTestId('theme-switch').fill('3');
// 	await expect(page).toHaveScreenshot('theme-3.png');
// });

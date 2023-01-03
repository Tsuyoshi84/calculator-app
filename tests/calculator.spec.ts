import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('should have title', async ({ page }) => {
	expect(await page.textContent('h1')).toBe('calc');
});

// test('should show calculator', async ({ page }) => {
// 	await expect(page).toHaveScreenshot();
// });

test('should show numbers', async ({ page }) => {
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '2' }).click();
	await page.getByRole('button', { name: '3' }).click();

	await expect(page.getByText('123')).toBeVisible();
});

test('should show calculation result', async ({ page }) => {
	// 123 + 10 = 133
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '2' }).click();
	await page.getByRole('button', { name: '3' }).click();
	await page.getByRole('button', { name: '+' }).click();
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '0' }).click();
	await page.getByRole('button', { name: '=' }).click();

	await expect(page.getByTestId('display')).toContainText('133');
});

test('should show calculation result with decimal', async ({ page }) => {
	// 12.3 + 10 * 4 / 2 - 1 = 31.3
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '2' }).click();
	await page.getByRole('button', { name: '.' }).click();
	await page.getByRole('button', { name: '3' }).click();
	await page.getByRole('button', { name: '+' }).click();
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '0' }).click();
	await page.getByRole('button', { name: 'x' }).click();
	await page.getByRole('button', { name: '4' }).click();
	await page.getByRole('button', { name: '/' }).click();
	await page.getByRole('button', { name: '2' }).click();
	await page.getByRole('button', { name: '-' }).click();
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '=' }).click();

	await expect(page.getByTestId('display')).toContainText('31.3');
});

test('should empty display after clicking reset', async ({ page }) => {
	await page.getByRole('button', { name: '1' }).click();
	await page.getByRole('button', { name: '2' }).click();
	await page.getByRole('button', { name: '3' }).click();
	await page.getByRole('button', { name: 'RESET' }).click();

	await expect(page.getByTestId('display')).toContainText('');
});

import { test, expect } from '@playwright/test';

const DEVELOPMENT_SERVER_URL = 'http://localhost:3000';

test('has title', async ({ page }) => {
  await page.goto(DEVELOPMENT_SERVER_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Next App/);
});

test('has header', async ({ page }) => {
  await page.goto(DEVELOPMENT_SERVER_URL);

  // Check for header
  await expect(
    page.getByText('Welcome to Student Catalog', { exact: false })
  ).toBeVisible();
});

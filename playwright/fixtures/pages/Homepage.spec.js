import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('displays a reference to page.jsx and a link to the README', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page.getByText(/src\/app\/page.jsx/)).toBeVisible();
    await expect(page.getByRole('link', { name: /readme/i })).toBeVisible();
  });
});

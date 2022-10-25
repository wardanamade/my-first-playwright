import { test, expect } from '@playwright/test';

test('Login to Swag Labs', async ({ page }) => {

 // 1. Launch Swag Labs
 await page.goto("https://www.saucedemo.com/");

 // 2. Fill the username field
 await page.fill('id=user-name', 'standard_user');

 // 3. Fill the username field
 await page.fill('id=password', 'secret_sauce');
  
 // 4. Click button login
 await page.click('id=login-button');

 // 5. Verify page title Swag Labs
 const title = page.locator('xpath=//html/head/title');
 await expect(title).toHaveText('Swag Labs');

});
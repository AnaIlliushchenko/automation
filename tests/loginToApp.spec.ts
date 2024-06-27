import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { users } from '../src/users';
import { ChatsPage } from '../src/pages/ChatsPage';

test.describe('validation login tests', () => {
  test.beforeEach( async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/login');
    await loginPage.validate(); 
  })
  test('Login to the app as test user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(users.testUser);
    const chatsPage = new ChatsPage(page);
    await chatsPage.validate(); 
    await expect(chatsPage.avatarButton).toHaveText(users.testUser.name);
  });

  test('Check login with wrong creds', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.emailField.fill(users.testUser.email);
    await loginPage.passwordField.fill('0000');
    await loginPage.loginButton.click();
    await expect(loginPage.validationError).toBeVisible();
  });
});
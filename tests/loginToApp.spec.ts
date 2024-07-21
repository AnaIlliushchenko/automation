import { test, expect } from '../src/fixtures/base';
import { users } from '../src/users';

test.describe('validation login tests', () => {

  test('Login to the app as test user', async ({ app }) => {
    await app.chatsPage.validate(); 
    await expect(app.chatsPage.header.avatarButton).toHaveText(users.testUser.name);
  });

  test('Check login with wrong creds', async ({ app }) => {
    await app.loginPage.emailField.fill(users.testUser.email);
    await app.loginPage.passwordField.fill('0000');
    await app.loginPage.loginButton.click();
    await expect(app.loginPage.validationError).toBeVisible();
  });
});
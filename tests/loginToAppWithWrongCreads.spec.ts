import { test, expect } from '../src/fixtures/base';
import { goto } from '../src/navigation';
import { users } from '../src/users';


test.describe('validation login tests', () => {
  test('Check login with wrong creds', async ({ app }) => {
    await goto(app.loginPage);
    await app.loginPage.login(users.adminUser);
    await expect(app.loginPage.validationError).toBeVisible();
  });
});
export * from '@playwright/test';
import { test as base, expect } from './base';
import { users } from '../users';
import { goto } from '../navigation';

export type TestOption = {
  user: keyof typeof users;
}

type TestFixtures = {
  login: void;
}

export const test = base.extend<TestFixtures & TestOption>({
  user: ['testUser', { option: true }],
  login: [async ({ app, user }, use) => {
    await goto(app.loginPage);
    await app.loginPage.login(users[user]);
    await expect(app.chatsPage.header.avatarButton).toHaveText(users[user].name);
    await use();

    await app.chatsPage.header.avatarButton.click();
    const logoutButton = app.page.locator('[class="v-list-item-title"]', { hasText: 'Log out' });
    await logoutButton.click();
    await app.loginPage.validate();
  }, { auto: true }]
});
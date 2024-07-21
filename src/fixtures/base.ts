export * from '@playwright/test';
import { API } from '../helpers/api';
import { test as base, expect } from '@playwright/test';
import { Steps } from '../steps';
import { App } from '../App';
import { users } from '../users';


type MyFixture = {
  api: API
  steps: Steps;
  app: App;
  login: void;
  
};

export type TestOption = {
  user: keyof typeof users;
}

export const test = base.extend<MyFixture & TestOption>({
    api: async({ page }, use) => await use(new API(page.request)),
    app: async( { page }, use) => await use(new App(page)),
    steps: async({ app, api }, use) => await use(new Steps(app, api)),

    login: [async ({ page, app, user }, use) => {
      await page.goto('/');
      await app.loginPage.login(users[user]);
      await expect(app.chatsPage.header.avatarButton).toHaveText(users[user].name);
  
      await use();
  
      await app.chatsPage.header.avatarButton.click();
      const logoutButton = page.locator('[class="v-list-item-title"]', { hasText: 'Log out' });
      await logoutButton.click();
      await app.loginPage.validate();
  
    }, { auto: true }]
});
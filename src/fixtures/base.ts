export * from '@playwright/test';
import { API } from '../helpers/api';
import { test as base } from '@playwright/test';

type MyFixture = {
  api: API
};

export const test = base.extend<MyFixture>({
  api: async ({ page }, use) => await use(new API(page.request))
});
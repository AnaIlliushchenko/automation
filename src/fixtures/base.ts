export * from '@playwright/test';
import { API } from '../helpers/api';
import { test as base } from '@playwright/test';
import { Steps } from '../steps';
import { App } from '../App';


type MyFixture = {
  api: API
  steps: Steps;
  app: App;  
};


export const test = base.extend<MyFixture>({
    api: async({ page }, use) => await use(new API(page.request)),
    app: async( { page }, use) => await use(new App(page)),
    steps: async({ app, api }, use) => await use(new Steps(app, api)),
});
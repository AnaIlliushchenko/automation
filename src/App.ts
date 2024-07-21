import { DriversPage } from './pages/DriversPage';
import { LoginPage } from './pages/LoginPage';
import { TrucksPage } from './pages/TrucksPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ChatsPage } from './pages/ChatsPage';
import { Page } from '@playwright/test';


export class App {

  readonly loginPage = new LoginPage(this.page);
  readonly chatsPage = new ChatsPage(this.page);
  readonly trucksPage = new TrucksPage(this.page);
  readonly driversPage = new DriversPage(this.page);
  readonly facilitiesPage = new FacilitiesPage(this.page);

  constructor (readonly page: Page) {}


}
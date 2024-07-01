import { expect } from '@playwright/test';
import { BaseViewPage } from './base/baseViewPage';
import { Navigation } from '../navigation';


export class ChatsPage extends BaseViewPage implements Navigation {
  readonly searchField = this.locator('[class="v-input__control"]').first();


  url() {
    return 'chats';
  }

  async waitForLoadState() {}

  async validate() {
    await expect(this.searchField).toBeVisible();
  }
}
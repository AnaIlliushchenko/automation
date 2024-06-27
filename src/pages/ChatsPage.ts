import { expect } from '@playwright/test';
import { Base } from './base';


export class ChatsPage extends Base {
  readonly avatarButton = this.locator('[class="v-btn__content"]');

  async validate() {
    await expect(this.avatarButton).toBeVisible();
  }
}
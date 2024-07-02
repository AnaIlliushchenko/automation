import { expect } from '@playwright/test';
import { BaseViewPage } from './base/baseViewPage';
import { Footer } from './components/footer';
import { Navigation } from '../navigation';
import { Table } from './components/table';


export class TrucksPage extends BaseViewPage implements Navigation{
  readonly footer = new Footer(this.page);
  
  readonly table = new Table(this.page);

  url() {
    return 'fleets/trucks';
  }

  async waitForLoadState() {}

  async validate() {
    await expect(this.locator('[class="v-table__wrapper"]')).toBeVisible();
  }
}
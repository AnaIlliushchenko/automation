import { expect } from '@playwright/test';
import { BaseViewPage } from './base/baseViewPage';
import { Footer } from './components/footer';
import { Navigation } from '../navigation';
import { Table } from './components/table';


export class FacilitiesPage extends BaseViewPage implements Navigation{
  readonly footer = new Footer(this.page);
  
  readonly table = new Table(this.page);

  protected readonly URL = 'company/facilities';

  async waitForLoadState() {}

  async validate() {
    await expect(this.locator('[class="v-col d-flex"]')).toBeVisible();
    await this.page.waitForLoadState();
  }
}
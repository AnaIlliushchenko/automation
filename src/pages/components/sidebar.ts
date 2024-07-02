import { Base } from '../base/base';

export class Sidebar extends Base {
  readonly sidebar = this.locator('#main-sidebar');
  
  readonly companyName = this.sidebar.locator('.company-name');
}
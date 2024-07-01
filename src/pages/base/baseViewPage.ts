import { Base } from './base';
import { Header } from './header';
import { Sidebar } from './sidebar';

export abstract class BaseViewPage extends Base {
  readonly sidebar = new Sidebar(this.page);
  
  readonly header = new Header(this.page);
}
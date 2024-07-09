import { Base } from './base';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

export abstract class BaseViewPage extends Base {
  readonly sidebar = new Sidebar(this.page);

  readonly header = new Header(this.page);

  protected abstract readonly URL: string;

  url() {
    return this.URL;
  }
}

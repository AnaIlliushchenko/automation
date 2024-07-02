import { Base } from '../base/base';

export class Footer extends Base {
  readonly footer = this.locator('[class="v-data-table-footer"]');

  readonly elemsPerPageDropdown = this.footer.locator('[class="v-data-table-footer__items-per-page"]');

  readonly numberOfPageCounter = this.footer.locator('[class="v-data-table-footer__info"]');

  readonly prevButton = this.footer.locator('[class="v-pagination__prev"]');
  
  readonly nextButton = this.footer.locator('[class="v-pagination__next"]');
}
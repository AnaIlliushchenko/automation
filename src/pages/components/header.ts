import { Base } from '../base/base';

export class Header extends Base {
  protected readonly root = this.locator('header');

  readonly hideSidebarButton = this.root.locator('[class="d-flex align-center"]').first();

  readonly localTimeView = this.root.locator('[class="mr-2"]');

  readonly notificationButton = this.root.locator('[class="v-btn v-btn--icon v-theme--light text-grey-darken-1 v-btn--density-default v-btn--size-default v-btn--variant-text"]');

  readonly avatarButton = this.root.locator('[class="text-grey-darken-2 body-2"]');
}
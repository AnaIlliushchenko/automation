import { expect } from '@playwright/test';
import { Base } from './base/base';
import { User } from '../users';
import { Navigation } from '../navigation';


export class LoginPage extends Base implements Navigation{
  readonly emailField = this.getByType('email');

  readonly passwordField = this.getByType('password');

  readonly loginButton = this.getByType('button');

  readonly forgotPasswordButton = this.getByText('Forgot password');

  readonly validationError = this.getByText('Wrong Email or password');

  url() {
    return 'login';
  }

  async waitForLoadState() {}

  async login(user: User) {
    await this.emailField.fill(user.email);
    await this.passwordField.fill(user.password);
    await this.loginButton.click();
    await this.page.waitForLoadState();
    await this.page.waitForResponse('/api/v1/dispatchers/me?')
  }

  async validate() {
    await expect(this.locator('[class="login-form__title text-h5 text-center font-weight-medium mb-2"]'))
                     .toHaveText('Welcome to Omni-dispatch TMS');
    await 
    expect(this.emailField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
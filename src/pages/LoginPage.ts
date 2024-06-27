import { expect } from '@playwright/test';
import { Base } from './base';
import { User } from '../users';


export class LoginPage extends Base {
  readonly emailField = this.getByType('email');

  readonly passwordField = this.getByType('password');

  readonly loginButton = this.getByType('button');

  readonly forgotPasswordButton = this.getByText('Forgot password');

  readonly validationError = this.getByRole('alert');

  async login(user: User) {
    await this.emailField.fill(user.email);
    await this.passwordField.fill(user.password);
    await this.loginButton.click();
  }

  async validate() {
    await expect(this.locator('[class="login-form__title text-h5 text-center font-weight-medium mb-2"]'))
                     .toHaveText('Welcome to Omni-dispatch TMS');
    await expect(this.emailField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
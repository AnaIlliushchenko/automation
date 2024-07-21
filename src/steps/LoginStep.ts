import { step } from "../helpers/step";
import { goto } from '../navigation';
import { users } from '../users';
import { BaseSteps } from './BaseSteps';

export class LoginSteps extends BaseSteps{
    @step ('Login as a TestUser')
    async login() {
            await goto(this.app.loginPage);
            await this.app.loginPage.validate();
            await this.app.loginPage.login(users.testUser);
            await goto(this.app.driversPage);
            await this.app.driversPage.validate();
    }
}
import { LoginSteps } from "./LoginStep"
import { SomeSteps } from "./SomeSteps"
import { applyMixins } from "../helpers/utils";
import { BaseSteps } from './BaseSteps';

class Steps extends BaseSteps{};

interface Steps extends LoginSteps, SomeSteps {}

applyMixins(Steps, [LoginSteps, SomeSteps]);

export { Steps };
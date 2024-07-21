import { API } from '../helpers/api';
import { App } from '../App';


export abstract class BaseSteps {
  constructor (readonly app: App, readonly api: API) {}


}
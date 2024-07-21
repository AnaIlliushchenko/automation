import { test } from "@playwright/test"

export function step(title: string){
    return function (target: Function, context: ClassMethodDecoratorContext) {
        return function replacementMethod(...args: any) {
          return test.step(title, async () => {
            return await target.call(this, ...args);
          });
        };
    }
}
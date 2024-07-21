import { test } from '../src/fixtures/login'

test.describe('validation login tests', () => {

  test('Login to the app as test user', async ({ app }) => {
    await app.chatsPage.validate(); 
  })
});
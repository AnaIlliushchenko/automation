import { test, expect } from '../src/fixtures/base';
import { goto } from '../src/navigation';


test.describe('some API checking tests', () => {

  test('get loggined used id', async ({ api }) => {
    const { id } = await api.get('me');
    console.log(id);

    // just for comparing and understanding that test works
    await expect(id).toEqual(751);
  });

  test('get trucks numbers of year 2023', async ({ api, app }) => {
    await goto(app.trucksPage);
    await app.trucksPage.validate();
    const { items } = await api.get('trucks');
    const newTrucks = items.filter(item => item.year === 2023).map(item => item.number);
    console.log(newTrucks);

    // just for comparing and understanding that test works
    const result = ["Truck1", "Truck3", "Truck5"];
    await expect(newTrucks).toEqual(result);
  });

  test('get facilities names with the same address', async ({ api, app }) => {
    await goto(app.facilitiesPage);
    await app.facilitiesPage.validate();
    const { items } = await api.get('facilities');
    const addresses = {};  
    items.forEach(element => {
      if (addresses[element.address]) {
        addresses[element.address].push(element.name);
      } else {
        addresses[element.address] = [element.name];
      }
    });

    // just for comparing and understanding that test works
    console.log(addresses);
    await expect(addresses[Object.keys(addresses)[0]].length).toEqual(1);
    await expect(addresses[Object.keys(addresses)[1]].length).toEqual(9);
  });

  test('insertion emojis intead of numbers', async ({ app }) => {
    const arr = ['😀', '🫠', '🫨', '🤤', '🤥', '🥵', '😎', '🤢', '👺', '👽️'];
    await app.page.route('/api/v1/trucks?*', async route => {
      const response = await route.fetch();
      const json = await response.json();
      const replaceNumberWithEmojies = (number) => number.toString().split('').map((item) => arr[item]).join('');

      json.items = json.items.map((item) => {
        if (item?.trailer) {
          item.trailer.payload = replaceNumberWithEmojies(item.trailer.payload);
          item.trailer.length = replaceNumberWithEmojies(item.trailer.length);
          item.trailer.min_width = replaceNumberWithEmojies(item.trailer.min_width);
          item.trailer.min_height = replaceNumberWithEmojies(item.trailer.min_height);
        }
        return item;
      });

      await route.fulfill({ response, json });
    });

    await goto(app.trucksPage);
    await app.page.waitForTimeout(10000)
    await app.trucksPage.validate();
  });
})

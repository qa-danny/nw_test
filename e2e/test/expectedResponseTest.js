module.exports = {
  before: async function(browser) {
    browser.globals.waitForConditionTimeout = 10000;
    await browser.navigateTo('https://www.zappos.com/cart');
  },
  'API Test - GET': async function(browser) {
    await browser.expect.url().to.endWith('/cart');
    let apiUrl = 'https://dog.ceo/api/breeds/list/all';
    console.log(apiUrl);
    let response = await browser.apiGet(apiUrl);
    console.log(JSON.stringify(response));
    const newData = JSON.stringify(response);
    await browser.assert.includes(newData, 'auth');
  },
  after: async function(browser) {
    browser.end();
  }
}
// describe('expected response example', async function() {
//   before(browser => browser.navigateTo('https://www.zappos.com/cart'));
//   it('Checks an expected response', async function(browser) {
//     const cookies = await browser.getCookies();
//     console.log(cookies);
//     const response = await browser.waitForExpectedResponse('test');
//     console.log(response);
//   });
// });
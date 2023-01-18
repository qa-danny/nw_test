const fetch = require('node-fetch');

module.exports = {
  before: async function(browser) {
    browser.globals.waitForConditionTimeout = 10000;
    await browser.navigateTo('https://www.zappos.com/cart');
  },
  'API Test - GET': async function(browser) {
    await browser.expect.url().to.endWith('/cart');
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';
    // const response = await fetch(apiUrl);
    // // const data = await response.json();
    // console.log(response);
    await browser.waitForExpectedResponse(() => fetch(apiUrl), { dogBreeds: 2 });
    console.log('completed Wait For expected Response. Time to pause');
    await browser.pause(200);
    console.log('completed pause. do it again');
    await browser.pause(500);
  },
  after: async function(browser) {
    browser.end();
  }
}

const fetch = require('node-fetch');

module.exports = {
  before: async function(browser) {
    browser.globals.waitForConditionTimeout = 10000;
    await browser.navigateTo('https://www.google.com/');
  },
  'API Test - GET': async function(browser) {
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';
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

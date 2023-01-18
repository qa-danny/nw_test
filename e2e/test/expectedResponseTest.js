const fetch = require('node-fetch');

module.exports = {
  before: async function(browser) {
    browser.globals.waitForConditionTimeout = 10000;
    await browser.navigateTo('https://www.google.com/');
  },
  'API Test - GET, Expected To Pass': async function(browser) {
    // API url taken from https://jsonplaceholder.typicode.com/
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    await browser.waitForExpectedResponse(() => fetch(apiUrl),
    // expected response:
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    });
    console.log('Completed Wait For Expected Response.')
    await browser.assert.ok(true, 'Passed assertion');
    console.log('Completed Assertion, Passed.');
  },
  'API Test - GET, Forcing To Fail': async function(browser) {
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';
    await browser.waitForExpectedResponse(() => fetch(apiUrl), { message: { dogBreeds: 2 }});
    console.log('Completed Wait For expected Response');
    await browser.assert.ok(true, 'Passed Assertion After Expected Failure In WFER');
  },
  after: async function(browser) {
    browser.end();
  }
}

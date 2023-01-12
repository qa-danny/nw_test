// import { deepEqual } from 'fast-equals';

// /**
//  * Wait for API to come back with expected properties in the response
//  * Will retry an API, and has a timeout between each call
//  * @param {Function} apiMethod      API method you want to fire and retry
//  * @param {Object} expectedResponse An object of properties you'd expect to find in the response
//  * @param {Number} [retries=3]      Number of retries the API should run before failing
//  * @param {Number} [timeout=1000]   Time in milliseconds of how long to wait between each retry
//  */
// module.exports = class WaitForExpectedResponse {
//   async command(expectedResponse, retries = 3, timeout = 1500) {
//     let response;
//     let doesContainExpected;
//     for (; retries > 0; retries--) {
//       console.log('for loop', new Date());
//       try {
//         response = await catBreed(2);
//         console.log(response, new Date());
//         response = await response;
//       } catch (error) {
//         await this.api.assert.ok(false, error);
//       }
//       // look through all keys in expectedResponse, and check the API response to see if they deepEqual
//       doesContainExpected = Object.keys(expectedResponse).every(key => deepEqual(expectedResponse[key], response[key]));
//       console.log(doesContainExpected);
//       if (doesContainExpected) {
//         return;
//       }
//         console.log('pausing in function', new Date());
//         await this.api.pause(timeout);
//         console.log('about to repeat loop', new Date());
//     }
//     await this.api.assert.ok(doesContainExpected, `Exceeded max number of retries. API Response ${JSON.stringify(response)} does not contain Expected Response ${JSON.stringify(expectedResponse)}`);
//   }
// };

// async function catBreed(limit = 1, fetcher = timedFetch('getCatBreeds')) {
//   return fetcher(`https://catfact.ninja/breeds/limit=${limit}`);
// }

const request = require('request');
const events = require('events');

module.exports = class ApiGet {
  async command(apiUrl) {
    let response;
    try {
      response = await request.get(apiUrl);
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}

// module.exports = class ApiGet {
//   async command(apiUrl) {
//     let response;
//     try {
//       response = await request.get(apiUrl);
//     } catch (error) {
//       console.log(error);
//     }
//     console.log('RESPONSE IN APIGET FUNCTION', JSON.stringify(response));
//     return JSON.stringify(response);
//   }
// };

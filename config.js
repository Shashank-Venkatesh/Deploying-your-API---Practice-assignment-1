// Loading the dotenv paackage
require('dotenv').config();

// working with environment variable
const config = {
  apiKey: process.env.API_KEY,  //api cdoe
  serverSecret: process.env.SERVER_SECRET,  //server code
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Exporting the config object
module.exports = config;

// this for checking
console.log(config);

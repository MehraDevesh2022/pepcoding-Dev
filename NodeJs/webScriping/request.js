const request = require('request');
const cheerio = require('cheerio');

request("https://www.worldometers.info/coronavirus/",function (err, response, body) {
    console.error("err :", err);
    console.log("response :", response && response.statusCode);
    console.log("body :", body);
  }
);
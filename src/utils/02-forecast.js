const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=816532af7a629611fdd8e754d155d398&query=" +
    latitude +
    "," +
    longitude +
    "&unit=c";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services...", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecast;

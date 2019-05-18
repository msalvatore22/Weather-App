const request = require('request');

const forecast = (latitude, longitude, callback) => {
const url = `https://api.darksky.net/forecast/bc65070ab2dca9c102829a07d8c0c748/${latitude},${longitude}`

request({ url, json: true }, (error, { body }) => {
  if(error){
    callback("Unable to connect to weather service")
  } else if(body.error) {
    callback('Unable to find location.')
  } else {
    callback(undefined, {
      placename: body.daily.data[0].summary,
      temperature: body.currently.temperature,
      Rainchance:  body.currently.precipProbability
    })
  }
})
}

module.exports = forecast
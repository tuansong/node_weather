const axios = require('axios');

const forecast = ( latitude, longtitude, getForecast ) => {
    const urlGetWeather = 'https://api.darksky.net/forecast/2aca3466c3660fd1206bbf49fd20622d';
    const url = `${urlGetWeather}/${latitude},-${longtitude}`;

    axios.get( url ).then( res => {
        getForecast( undefined, {
            temp: res.data.currently.temperature
        })
    })
}

module.exports = forecast;
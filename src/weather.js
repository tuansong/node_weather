const axios = require('axios');
const forecast = require('./ultis/forecast');
const geocode = require('./ultis/geocode');

const getWeather = ( location, getValue ) => {
    geocode( location, ( error, { latitude, longtitude} )=> {
        forecast( latitude, longtitude, ( error, { temp } ) => {
            const currentWeather = `The current weather of ${ location } is ${ temp }`;
            getValue( error, currentWeather );
        })
    })
}   

module.exports = {
    getWeather: getWeather
}


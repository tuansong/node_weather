const axios = require('axios');

const geocode = ( location, getCurrentWeather ) => {
    const urlGetLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
    const token = 'pk.eyJ1IjoiY3VjY3UiLCJhIjoiY2s4ODV4aWxwMDVkNDNsbzFweWhudm93bSJ9.x6i3fYLd_e1zcnZwRuhMNw';
    const query = decodeURIComponent(`${location.replace(/\s/g, "%20")}.json`)

    const url =`${urlGetLocation}/${query}?access_token=${token}`

    axios.get( url ).then( (res, error) => {
            getCurrentWeather( undefined, {
                latitude: res.data.features[0].center[0],
                longtitude: res.data.features[0].center[1],
                location: res.data.features[0].place_name
            })
    } ).catch( error => console.log('Something went wrong') );
}

module.exports = geocode;
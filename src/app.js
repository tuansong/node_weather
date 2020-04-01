const path = require('path');
const express = require('express');
const hbs = require('hbs');

const weather = require('./weather');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup view engine with handlebar
app.set('view engine', 'hbs') 
app.set('views', viewsPath);

hbs.registerPartials( partialsPath );
// Setup static directory
app.use(express.static(publicPath));

app.get('', ( req, res ) => {
    res.render('index', { title: 'Weather app', name: 'TusoTr'});
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'This is about page',
        name: 'TusoTr'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'This is help page',
        name: 'TusoTr'
    })
})

app.get('/product', (req, res) => {
    console.log(req.query);
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if( !req.query.location ) {
        return res.send({
            error: 'Location is missing, please provide location query'
        })
    }
    weather.getWeather( req.query.location, ( error, currentWeather ) => {
        res.send({
            weather: currentWeather
        })
    } );
})

app.get('/help/*', (req, res) => {
    res.send('Help article is not found')
})

// app.get('*', (req, res) => {
//     res.send('404 page not found abc')
// })


app.listen(3000, () => {
    console.log('App is listen on port 3000.')
})
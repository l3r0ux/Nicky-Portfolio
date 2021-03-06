const express = require('express');
const path = require('path');

const app = express();

// Heroku url
// https://dry-dusk-27012.herokuapp.com/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    // res.set('Cache-Control', 'no-cache');
    res.render('index');
});

app.get('/digital-arts', (req, res) => {
    // res.set('Cache-Control', 'no-cache');
    res.render('digital-arts');
})

app.get('/3d-models', (req, res) => {
    res.render('3d-models');
})

app.get('/animations', (req, res) => {
    res.render('animations');
})

let port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on ${port}`);
})
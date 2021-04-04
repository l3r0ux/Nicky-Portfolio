const express = require('express');
const path = require('path');
// const SwupHeadPlugin = require('./node_modules/@swup/head-plugin/dist/SwupHeadPlugin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')));
// HAVE TO SERVE THE FILE TO BE ABLE TO ACCESS IT IN SCRIPT TAGS AND IMPORTS ON CLIENT SIDE
app.use(express.static(path.join(__dirname, 'node_modules/@swup/head-plugin/dist')));
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

let port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on ${port}`);
})
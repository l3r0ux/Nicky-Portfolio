const express = require('express');
const path = require('path');

const app = express();

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

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Listening on port`);
})
// To make page transitions work, only need this one line of js
// const SwupHeadPlugin = require('@swup/head-plugin');
const swup = new Swup({
    plugins: [new SwupHeadPlugin()]
});

function init() {
    if (document.querySelector('title').innerText === 'Nicky Bothma') {
        console.log(document.querySelector('title').innerText === 'Nicky Bothma')
        console.log(document.querySelector('title').innerText === 'Digital Arts')

        // Append js for reload
        const homeJs = document.createElement('script');
        homeJs.src = '/javascripts/index.js';
        homeJs.id = 'home-js';
        document.body.append(homeJs);

        // Append css for reload
        // const homeStyles = document.createElement('link');
        // homeStyles.rel = 'stylesheet';
        // homeStyles.href = '/css/main.css';
        // homeStyles.id = 'home-css'
        // document.head.append(homeStyles);
    }
    else if (document.querySelector('title').innerText === 'Digital Arts') {
        console.log(document.querySelector('title').innerText === 'Nicky Bothma')
        console.log(document.querySelector('title').innerText === 'Digital Arts')

        // const artsCss = document.createElement('link');
        // artsCss.rel = 'stylesheet';
        // artsCss.href = '/css/digital-arts.css';
        // artsCss.id = 'arts-css';
        // document.body.append(artsCss);
    }
}

init();

function unload() {
    if (document.querySelector('title').innerText === 'Nicky Bothma') {
        console.log(document.querySelector('title').innerText === 'Nicky Bothma')
        document.getElementById('home-js').remove();
        // document.getElementById('home-css').remove();
    }
    else if (document.querySelector('title').innerText === 'Digital Arts') {
        // document.getElementById('arts-css').remove();
    }
}
swup.on('willReplaceContent', unload);

swup.on('contentReplaced', init);

{/* <link rel="stylesheet" href="/css/main.css"></link> */ }
console.log(window.location.href)
let urlParams = new URLSearchParams(window.location.search);
let clickedX = urlParams.get('clickedX');
let clickedY = urlParams.get('clickedY');
console.log(clickedX, clickedY)

let incomingCoords = document.querySelector(':root');
incomingCoords.style.setProperty('--clickedX', `${clickedX}px`);
incomingCoords.style.setProperty('--clickedY', `${clickedY}px`);

// All anchor tags on home page to do a timout together with css animation
const links = document.querySelectorAll('a');
for (let link of links) {
    console.log(link)
    // only add fade in class if navigation is not to home page
    // so that navigation to home page looks seemless
    // and to fade it out for only pages where the bubble will grow
    link.addEventListener('click', (e) => {
        console.log(e.target)
        if (!(e.target.id === '/')) {
            document.querySelector('main').classList.add('fade-content')
        } else if (e.target.id === '/') {
            let displayWidnow = document.querySelector('.display-window');
            displayWidnow.classList.add('fade-content');
        }
        setTimeout(function () {
            // passing through clicked coordinates from click-coordinates.js
            window.location.href = `${e.target.id}?clickedX=${clickedXCoord}&clickedY=${clickedYCoord}`;
        }, 100)
    });
}
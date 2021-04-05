console.log(window.location.href)
let urlParams = new URLSearchParams(window.location.search);
let incomingX = urlParams.get('clickedX');
let incomingY = urlParams.get('clickedY');
console.log(incomingX, incomingY)

let incomingCoords = document.querySelector(':root');
incomingCoords.style.setProperty('--incomingX', `${incomingX}px`);
incomingCoords.style.setProperty('--incomingY', `${incomingY}px`);

// All anchor tags on home page to do a timout together with css animation
const links = document.querySelectorAll('a');
for (let link of links) {
    console.log(link)
    link.addEventListener('click', () => {
        document.body.classList.add('fade-body')
        setTimeout(function () {
            // passing through clicked coordinates
            window.location.href = `/?clickedX=${incomingX}&clickedY=${incomingY}`;
        }, 100)
    });
}
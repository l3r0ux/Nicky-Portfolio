const digitalArtsContainer = document.getElementById('digital-arts')
const scrollingButtons = document.querySelectorAll('.scroll')
const scrollLeft = document.getElementById('scroll-left')
const scrollRight = document.getElementById('scroll-right')
const artworks = document.querySelectorAll('.artwork')
const containerDimensions = digitalArtsContainer.getBoundingClientRect();

let timerId;
let scroll = 0;

// Randomly positioning artworks like an art gallery wall
artworks.forEach((artwork) => {
    artwork.style.top = `${(Math.random() * containerDimensions.height / 8)}px`;
    randSize = `${Math.random() * (500 - 400) + 400}`
    artwork.style.height = `${randSize + 50}px`;
    artwork.style.width = `${randSize}px`;

    // add click listener to show large version of image on click
    artwork.addEventListener('click', (e) => {

    })
})

// Positioning the buttons to scroll left of right
scrollLeft.style.left = `${containerDimensions.left + 10}px`;
scrollRight.style.left = `${containerDimensions.right - 60}px`;

// use touchstart and touch end for mobile
scrollingButtons.forEach((button) => {
    button.addEventListener('mousedown', (e) => {
        if (e.target.id === 'scroll-right') {
            timerId = setInterval(() => {
                digitalArtsContainer.scrollBy(scroll + 3, 0)
            }, 1)
        }
        else if (e.target.id === 'scroll-left') {
            timerId = setInterval(() => {
                digitalArtsContainer.scrollBy(scroll - 3, 0)
            }, 1)
        }
    })
})

digitalArtsContainer.addEventListener('mouseup', (e) => {
    clearInterval(timerId)
})


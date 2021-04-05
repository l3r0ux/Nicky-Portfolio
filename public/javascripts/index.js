// Line where circles are to be on
const guidingLine = document.getElementById('bubbles-guiding-line');

// art
const artBubble = document.querySelector('.digital-arts-bubble')
const artSection = document.getElementById('digital-arts-short')

// models
const modelsBubble = document.querySelector('.models-bubble')
const modelsSection = document.getElementById('models-short')

// animation
const animationsBubble = document.querySelector('.animations-bubble');
const animationsSection = document.getElementById('animations-short');

// All anchor tags on home page to do a timout together with css animation
const links = document.querySelectorAll('a');
for (let link of links) {
    console.log(link)
    link.addEventListener('click', () => {
        // Fade out body then navigate to respective page
        document.body.classList.add('fade-body');
        setTimeout(function() {
            // passing through clicked coordinates
            window.location.href = `/digital-arts?clickedX=${clickedXCoord}&clickedY=${clickedYCoord}`;
        }, 200);
    });
}

window.addEventListener('scroll', () => {
    // To send the positions to css
    let positions = document.querySelector(':root');
    // ARTS BUBBLE
    // These coordinates are used in the class that gets toggled
    // send through top position of respective section constantly to position correct bubble
    positions.style.setProperty('--digital-arts-short__top', `${artSection.getBoundingClientRect().top}px`);

    // MODELS BUBBLE
    positions.style.setProperty('--models-short__top', `${modelsSection.getBoundingClientRect().top}px`);

    // ANIMATIONS BUBBLE
    positions.style.setProperty('--animations-short__top', `${animationsSection.getBoundingClientRect().top}px`);

    // When they intersect, stick bubble on correct position it was previously
    if (artSection.getBoundingClientRect().top < artBubble.getBoundingClientRect().bottom - (artBubble.offsetHeight / 2)) {
        artBubble.classList.add('unfix-digital-arts-bubbles');
    } else if (guidingLine.getBoundingClientRect().top < artBubble.getBoundingClientRect().top + (artBubble.offsetHeight / 2)) {
        artBubble.classList.remove('unfix-digital-arts-bubbles');
    }

    // 
    if (modelsSection.getBoundingClientRect().top < modelsBubble.getBoundingClientRect().bottom - (modelsBubble.offsetHeight / 2)) {
        modelsBubble.classList.add('unfix-models-bubbles');
    } else if (guidingLine.getBoundingClientRect().top < modelsBubble.getBoundingClientRect().top + (modelsBubble.offsetHeight / 2)) {
        modelsBubble.classList.remove('unfix-models-bubbles');
    }

    // 
    if (animationsSection.getBoundingClientRect().top < animationsBubble.getBoundingClientRect().bottom - (animationsBubble.offsetHeight / 2)) {
        animationsBubble.classList.add('unfix-animations-bubbles');
    } else if (guidingLine.getBoundingClientRect().top < animationsBubble.getBoundingClientRect().top + (animationsBubble.offsetHeight / 2)) {
        animationsBubble.classList.remove('unfix-animations-bubbles');
    }
});

artBubble.addEventListener('click', () => {
    artSection.scrollIntoView({ block: "center" });
});
modelsBubble.addEventListener('click', () => {
    modelsSection.scrollIntoView({ block: "center" });
});
animationsBubble.addEventListener('click', () => {
    animationsSection.scrollIntoView({ block: "center" });
});


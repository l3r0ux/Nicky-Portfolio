// Getting coordinates of where user clicked and setting them in html root
// to dynamically grow circle from there
let clickedXCoord;
let clickedYCoord;

function setMousePos(event) {
    clickedXCoord = event.clientX;
    clickedYCoord = event.clientY;

    console.log(clickedXCoord)
    console.log(clickedYCoord)

    // send to css variables
    let coords = document.querySelector(':root');
    coords.style.setProperty('--clickedX', clickedXCoord);
    coords.style.setProperty('--clickedY', clickedYCoord);
}
document.addEventListener("click", setMousePos);


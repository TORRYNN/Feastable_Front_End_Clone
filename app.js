let feastHeading = document.querySelector('#feast');
let productWrap = document.querySelector('.productwrap');

// Show the productWrap on mouse enter
feastHeading.addEventListener('mouseenter', () => {
    productWrap.style.top = '0';
});

// Hide the productWrap on mouse leave if the mouse is not over the productWrap
feastHeading.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!productWrap.matches(':hover')) {
            productWrap.style.top = '-200%';
        }
    }, 200);
});

// Show the productWrap when mouse enters it
productWrap.addEventListener('mouseenter', () => {
    productWrap.style.top = '0';
});

// Hide the productWrap when mouse leaves it
productWrap.addEventListener('mouseleave', () => {
    productWrap.style.top = '-200%';
});


// Navigation scroll Effect

// Variable to scroll the lastscroll

let lastscroll = 0;

// Selecting the navbar
const navbar = document.querySelector("aside");

// Using Event Listener to register the scroll event

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY||document.body.scrollTop;
    if(currentScroll>lastscroll) {
        navbar.style.top="-100%"
    }
    else{
        navbar.style.top="0";
    }

    //If currentScroll is less than or equal to last scroll  top will move to zero.
    // This also ensures that the current scroll doesn't become negative
    lastscroll = currentScroll<=0?0:currentScroll;

})
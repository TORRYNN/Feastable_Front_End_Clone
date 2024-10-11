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

// const container = document.querySelector('.item-container');
// const items = document.querySelectorAll('.item-wrapper');
// let index = 1; // Start from 1 to account for the first cloned item
// let itemWidth = items[0].offsetWidth;
// let totalItems = items.length;
// let isAnimating = false;

// // Clone first and last items for infinite loop effect
// const firstClone = items[0].cloneNode(true);
// const lastClone = items[totalItems - 1].cloneNode(true);

// container.appendChild(firstClone); // Clone first item to the end
// container.prepend(lastClone); // Clone last item to the beginning

// // Adjust the container's initial position to show the first item (accounting for the prepended clone)
// container.style.transform = `translateX(${-itemWidth}px)`;

// // Function to move carousel to the left (next)
// function moveCarouselLeft() {
//     if (isAnimating) return;
//     isAnimating = true;

//     index++; // Move to the next item
//     container.style.transition = 'transform 0.5s ease-in-out';
//     container.style.transform = `translateX(${-index * itemWidth}px)`;

//     // Infinite loop logic
//     setTimeout(() => {
//         if (index === totalItems + 1) { // Reached the cloned first item
//             index = 1; // Reset to the actual first item
//             container.style.transition = 'none'; // Disable animation
//             container.style.transform = `translateX(${-itemWidth}px)`; // Jump to the real first item
//         }
//         isAnimating = false;
//     }, 500); // Transition duration must match the CSS transition
// }

// // Set an interval to move the carousel automatically
// const autoMove = setInterval(moveCarouselLeft, 3000); // Moves every 3 seconds

// // (Optional) Pause the carousel when hovering over the container
// container.addEventListener('mouseenter', () => {
//     clearInterval(autoMove);
// });

// // (Optional) Resume the carousel when not hovering over the container
// container.addEventListener('mouseleave', () => {
//     setInterval(moveCarouselLeft, 3000);
// });


const container = document.querySelector('.item-container');
const items = document.querySelectorAll('.item-wrapper');
let index = 1; // Start from 1 to account for the first cloned item
let itemWidth = items[0].offsetWidth;
let totalItems = items.length;
let isAnimating = false;

// Clone first and last items for the infinite loop effect
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);

container.appendChild(firstClone); // Clone first item to the end
container.prepend(lastClone); // Clone last item to the beginning

// Adjust the container's initial position to show the first item (accounting for the prepended clone)
container.style.transform = `translateX(${-itemWidth}px)`;

// Function to move carousel to the left (next)
function moveCarouselLeft() {
    if (isAnimating) return;
    isAnimating = true;

    index++; // Move to the next item
    container.style.transition = 'transform 0.5s ease-in-out';
    container.style.transform = `translateX(${-index * itemWidth}px)`;

    // Infinite loop logic
    setTimeout(() => {
        if (index === totalItems + 1) { // Reached the cloned first item
            index = 1; // Reset to the actual first item
            container.style.transition = 'none'; // Disable animation
            container.style.transform = `translateX(${-itemWidth}px)`; // Jump to the real first item
        }
        isAnimating = false;
    }, 500); // Transition duration must match the CSS transition
}

// Function to start automatic scrolling
function startAutoScroll() {
    setInterval(() => {
        moveCarouselLeft();
    }, 3000); // Adjust time to control the speed
}

// Start the automatic scrolling
startAutoScroll();

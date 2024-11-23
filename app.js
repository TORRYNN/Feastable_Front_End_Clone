let feastHeading = document.querySelector('#feast');
let productWrap = document.querySelector('.productwrap');
let body = document.querySelector('body');


// Show the productWrap on mouse enter
feastHeading.addEventListener('mouseenter', () => {
    productWrap.style.top = '0';
    body.classList.add('no-scroll');
});

// Hide the productWrap on mouse leave if the mouse is not over the productWrap
feastHeading.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!productWrap.matches(':hover')) {
            productWrap.style.top = '-200%';
            body.classList.remove('no-scroll');
        }
    }, 200);
});

// Show the productWrap when mouse enters it
productWrap.addEventListener('mouseenter', () => {
    productWrap.style.top = '0';
    body.classList.add('no-scroll');
});

// Hide the productWrap when mouse leaves it
productWrap.addEventListener('mouseleave', () => {
    productWrap.style.top = '-200%';
    body.classList.remove('no-scroll');
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
document.addEventListener('DOMContentLoaded', () => {
    const itemContainer = document.querySelector('.item-container');
    const items = Array.from(itemContainer.children);
    const totalItems = items.length;

    // Clone items to create the illusion of infinite scrolling
    items.forEach(item => {
        const clone = item.cloneNode(true);
        itemContainer.appendChild(clone);
    });
    items.forEach(item => {
        const clone = item.cloneNode(true);
        itemContainer.appendChild(clone);
    });

    let currentIndex = 0;

    // Apply initial styles
    itemContainer.style.transition = 'transform 0.5s ease-in-out';

    // Function to get item width dynamically
    function getItemWidth() {
        return items[0].offsetWidth;  // Calculate the width of one item dynamically
    }

    // Function to handle right scrolling
    function scrollRight() {
        const itemWidth = getItemWidth();  // Get item width dynamically
        currentIndex++;
        itemContainer.style.transition = 'transform 0.5s ease-in-out';
        itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Handle the reset for infinite loop
        if (currentIndex >= totalItems) {
            setTimeout(() => {
                itemContainer.style.transition = 'none'; // Temporarily disable transition
                currentIndex = 0; // Reset to the first item
                itemContainer.style.transform = `translateX(0)`; // Reset to the start without gap
            }, 500); // Match the transition duration
        }
    }

    // Function to handle left scrolling
    function scrollLeft() {
        const itemWidth = getItemWidth();  // Get item width dynamically
        if (currentIndex === 0) {
            currentIndex = totalItems; // Jump to the last item (cloned set)
            itemContainer.style.transition = 'none'; // Disable transition
            itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Position correctly

            // Allow smooth transition for the next move
            setTimeout(() => {
                itemContainer.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }, 20); // Minimal delay for browser repaint
        } else {
            currentIndex--;
            itemContainer.style.transition = 'transform 0.5s ease-in-out';
            itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }

    // Attach click event to each item to scroll right
    Array.from(document.querySelectorAll('.item')).forEach(item => {
        item.addEventListener('click', scrollRight);
    });

    // Attach event listeners for navigation
    document.querySelector('.fa-arrow-right').addEventListener('click', scrollRight);
    document.querySelector('.fa-arrow-left').addEventListener('click', scrollLeft);

    // Handle window resizing to recalculate item width
    window.addEventListener('resize', () => {
        // When the window is resized, reset the container position and recalculate item width
        itemContainer.style.transition = 'none';
        itemContainer.style.transform = `translateX(0)`;
        currentIndex = 0;
    });

    // Mobile Swipe Logic
    let touchStartX = 0;  // Start position of touch
    let touchEndX = 0;    // End position of touch

    // Handle touch start (when user touches the screen)
    itemContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;  // Record starting touch position
    });

    // Handle touch move (optional, you can use this to visualize the swipe)
    itemContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.changedTouches[0].screenX;  // Update touch position while moving
    });

    // Handle touch end (when user lifts their finger)
    itemContainer.addEventListener('touchend', () => {
        const swipeThreshold = 50;  // Minimum distance for a valid swipe (in px)

        // Calculate the distance moved
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > swipeThreshold) {
            // Swipe right
            scrollLeft();  // Call the scrollLeft function to move left
        } else if (swipeDistance < -swipeThreshold) {
            // Swipe left
            scrollRight();  // Call the scrollRight function to move right
        }
    });
});

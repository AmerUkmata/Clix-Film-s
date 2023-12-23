function activateLink(clickedLink) {
    // Remove the 'active' class from all links
    var links = document.querySelectorAll('.nav-menu a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    clickedLink.classList.add('active');
}

// Store the header element in a variable
var header = document.querySelector('.main-header');

// Variable to store the last scroll position
var lastScrollTop = 0;

// Function to handle the scroll event
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add the 'header-hidden' class if scrolling down, remove it if scrolling up
    if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }

    // Update the last scroll position
    lastScrollTop = scrollTop;
}

// Attach the 'handleScroll' function to the scroll event
window.addEventListener('scroll', handleScroll);
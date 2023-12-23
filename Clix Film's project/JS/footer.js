var prevScrollpos = window.pageYOffset;

// Function to handle the scroll event
function handleScroll() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        // Scrolling up, show the footer
        document.getElementById("movieFooter").style.bottom = "0";
    } else {
        // Scrolling down, hide the footer
        document.getElementById("movieFooter").style.bottom = "-100px";
    }

    prevScrollpos = currentScrollPos;
}

// Attach the 'handleScroll' function to the scroll event
window.addEventListener('scroll', handleScroll);
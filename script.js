document.addEventListener('DOMContentLoaded', () => {
    const accessButton = document.getElementById('accessButton');
    const toggleButtons = document.getElementById('toggleButtons');
    const navLinks = document.getElementById('navLinks');
    const closeButton = document.getElementById('closeButton');
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementsByClassName('drawer')[0];
    let drawerOpen = false; // Flag to track drawer state
    
    accessButton.addEventListener('click', () => {
        // Hide nav links and show additional buttons
        navLinks.style.display = 'none';  // Hide nav links
        accessButton.style.display = 'none';
        toggleButtons.style.display = 'flex';  // Show additional buttons
    });

    closeButton.addEventListener('click', () => {
        // Show nav links and hide additional buttons
        accessButton.style.display = 'flex';
        navLinks.style.display = 'flex';  // Show nav links
        toggleButtons.style.display = 'none';  // Hide additional buttons
    });

    hamburger.addEventListener('click', () => {
        if (drawerOpen) {
            drawer.classList.remove('open'); // Close the drawer
        } else {
            drawer.classList.add('open'); // Open the drawer
        }
        drawerOpen = !drawerOpen; // Toggle the state
    });
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    // Adjust these values as needed
    if (scrollPosition > 600) {
        header.classList.remove('header-half-solid');
        header.classList.remove('header-transparent');
        header.classList.add('header-solid');
    } else if (scrollPosition > 300) {
        header.classList.remove('header-solid');
        header.classList.remove('header-transparent');
        header.classList.add('header-half-solid');
    } else {
        header.classList.remove('header-half-solid');
        header.classList.remove('header-solid');
        header.classList.add('header-transparent');
    }
});
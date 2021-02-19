const navToggle = document.querySelector('.nav-toggle') // set up to open nav when button is clicked
const navLinks = document.querySelectorAll('.nav__link') // set up to  take user to desired section and close nav

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navBg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navBg.classList.toggle('active');
});
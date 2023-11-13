const navbar = document.querySelector('.navbar');
const menu = document.querySelector('#menu');

menu.addEventListener('click', function() {
  navbar.classList.toggle('open');
});
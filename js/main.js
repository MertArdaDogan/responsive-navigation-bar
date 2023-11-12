let menu    =document.querySelector('#menu');
let navbar  =document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toogle('bx-x');
    navbar.classList.toogle.('open');
}
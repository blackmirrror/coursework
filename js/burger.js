// burger menu

var isClicked = false;
const burger = document.querySelector('.burger');
const submenu = document.querySelector('.submenu');

burger.addEventListener('click', () => {
    if (isClicked) {
        burger.classList.remove('fa-xmark');
        burger.classList.add('fa-bars');
        submenu.style.display = "none";
        isClicked = false;
    }
    else {
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-xmark');
        submenu.style.display = "flex";
        isClicked = true;
    }
});
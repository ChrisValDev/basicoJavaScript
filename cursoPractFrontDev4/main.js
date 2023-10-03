//Menu de escritorio
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}
// Menu de mobile
const menuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuImg.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}
// Menu shopping car
const viewCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCarMenu = document.querySelector('.product-detail');

viewCarrito.addEventListener('click', detalleByBuy);

function detalleByBuy() {
    shoppingCarMenu.classList.toggle('inactive');
}
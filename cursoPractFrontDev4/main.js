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


// Menu shoppingCar
const viewCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCarMenu = document.querySelector('.product-detail');

viewCarrito.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!mobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    shoppingCarMenu.classList.toggle('inactive');
}
// Generando una condicional dentro de funcion para que cuando se abra el carrito de compras, se cierre el menu mobile en caso deque se encuentre abierto.
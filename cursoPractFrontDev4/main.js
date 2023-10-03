//Menu de escritorio
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const shoppingCarClosed = shoppingCar.classList.contains('inactive');

    if (!shoppingCarClosed){
        shoppingCar.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
}


// Menu de mobile
const menuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuImg.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const shoppingCarClosed = shoppingCar.classList.contains('inactive');

    if (!shoppingCarClosed){
        shoppingCar.classList.add('inactive');
    }
    mobileMenu.classList.toggle("inactive");
}


// Menu shoppingCar
const viewCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-detail');

viewCarrito.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!mobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCar.classList.toggle('inactive');
}
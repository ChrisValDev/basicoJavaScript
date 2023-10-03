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

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: './icons/bt_add_to_cart.svg'
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: './icons/bt_add_to_cart.svg'
});
productList.push({
    name: "Computadora",
    price: 620,
    image: './icons/bt_add_to_cart.svg'
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
    
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
}
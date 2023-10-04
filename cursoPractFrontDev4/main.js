// Menu de mobile
const menuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuImg.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const shoppingCarClosed = shoppingCar.classList.contains('inactive');
    const closedProductDetail = detailOfProduct.classList.add('inactive');

    if (!shoppingCarClosed){
        shoppingCar.classList.add('inactive');
    }   if (!closedProductDetail) {
        detailOfProduct.classList.add('inactive');
    }
    mobileMenu.classList.toggle("inactive");
}

//Menu de escritorio
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const shoppingCarClosed = shoppingCar.classList.contains('inactive');
    const closedProductDetail = detailOfProduct.classList.add('inactive');

    if (!shoppingCarClosed){
        shoppingCar.classList.add('inactive');
    } if (!closedProductDetail) {
        detailOfProduct.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
}

// Menu shoppingCar
const viewCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-detail-first');

viewCarrito.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");
    const closedProductDetail = detailOfProduct.classList.add('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    } if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } if (!closedProductDetail) {
        detailOfProduct.classList.add('inactive');
    } 
    shoppingCar.classList.toggle('inactive');
}

//Detalle del producto
//Abrir detalle del producto al seleccionar el producto.
const detailOfProduct = document.querySelector('.product-detail-second');

function openProductDetailAside() {
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");
    const shoppingCarClosed = shoppingCar.classList.contains('inactive');

    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }   if (!shoppingCarClosed){
        shoppingCar.classList.add('inactive');
    }
    detailOfProduct.classList.remove('inactive');
}

//Cerrar detalle del producto con el boton de tache (x).
const botonProductClose = document.querySelector('.product-detail-close');

botonProductClose.addEventListener('click', closeProductDetailAside);

function closeProductDetailAside() {
    detailOfProduct.classList.add('inactive');
}


//Creacion de productos

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Computadora",
    price: 620,
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
    for (product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
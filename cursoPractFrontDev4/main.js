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

// Ciclo for para la creacion de los productos en la tienda.
for (product of productList) {

    const productCard = document.createElement('div');//se crea elemento div y se guarda en una constante productCard.
    productCard.classList.add('product-card');//se agrega una clase al elemento div.

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);//se agrega un atributo src al elemento img.

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;//se indica mostrar un texto en la etiqueta de parrafo (p) mediante innerText, tomando la informacion de objeto dentro del array productList mostrando el valor(atributo) de la propiedad(price).

    const productName = document.createElement('p');
    productName.innerText = product.name;//Aqui mostrando la propiedad name del objeto.

    const productInfoFigure = document.createElement('figure');//Recuerda que con document.createElement('elemento'); se crean elementos(etiquetas) HTML desde JavaScript.

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

//Asignacion de herencia. (etiquete padre e hijo)
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);//generando herencia de hijo con appendChild en productPrice y productName hacia el padre productInfoDiv.

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
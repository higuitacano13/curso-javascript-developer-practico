const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesaIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarCarrito');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesaIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoMenu);

function toggleDesktopMenu(){
    const isCarritoProductosClose = shoppingCarContainer.classList.contains('inactive');

    if(!isCarritoProductosClose){
        shoppingCarContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isCarritoProductosClose = shoppingCarContainer.classList.contains('inactive');

    if(!isCarritoProductosClose){
        shoppingCarContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isEmailMenuClose = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isEmailMenuClose){
        desktopMenu.classList.add('inactive');
    }

    shoppingCarContainer.classList.toggle('inactive');

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 1200,
    image: 'https://www.lg.com/content/dam/channel/wcms/co/images/monitores/27mp400-b_awp_escb_co_c/gallery/medium01.jpg'
});

productList.push({
    name: 'Computador',
    price: 1600,
    image: 'https://tiendasishop.com/media/catalog/product/d/i/dise_o_sin_t_tulo_1_1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg'
});

productList.push({
    name: 'Reloj',
    price: 1200,
    image: 'https://cdnx.jumpseller.com/relojes-y-lujo/image/25798321/resize/540/540?1658278347'
});

function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // -------- Organizar Elementos ---------- //
    
        productFigure.appendChild(imgIcon);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImage, productInfo);
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);
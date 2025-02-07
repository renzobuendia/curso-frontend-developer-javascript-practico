const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')
const buttonCloseProductDetailContainer = document.querySelector('.product-detail-close');
 
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
buttonCloseProductDetailContainer.addEventListener('click', closeProductDetailAside);

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive');
    }  
}

function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

    shoppingCartContainer.classList.toggle('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if(isProductDetailContainerOpen){
        productDetailContainer.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
})

productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.unsplash.com/photo-1570485071395-29b575ea3b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
})

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        cardsContainer.appendChild(productCard);
    }    
}

renderProducts(productList);
// JavaScript-Datei: script.js

var cartItems = [];
var cartTotal = 0;

function addToCart() {
    var quantity = document.getElementById('quantity').value;

    var product = {
        name: 'Easy_Pad',
        price: 600,
        quantity: parseInt(quantity)
    };

    cartItems.push(product);
    updateCart();
}

function updateCart() {
    var cartList = document.querySelector('.cart__items');
    var cartTotalElement = document.querySelector('.cart__total');

    cartList.innerHTML = '';

    cartTotal = 0;

    cartItems.forEach(function (product) {
        var li = document.createElement('li');
        li.textContent = product.name + ' - ' + product.price + ' x ' + product.quantity;
        cartList.appendChild(li);

        cartTotal += product.price * product.quantity;
    });

    cartTotalElement.textContent = cartTotal;
}

function checkout() {
    
}

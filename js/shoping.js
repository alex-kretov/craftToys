'use strict'
//shoping-cart
//var
var carts = document.querySelector('.catalog__wrapper');
var shoppingCartContent = document.querySelector('#cart-content tbody');
var clearCartBtn = document.querySelector('#clear-cart');



//listener
loadEventListeners();

function loadEventListeners() {
  //Когда добавлен новый курс
  carts.addEventListener('click', buyCart);
  
  //Когда нажата кнопка на удаление 
  shoppingCartContent.addEventListener('click', removeCart);
  
  //Удаление всех товаров в козине btn
  
  clearCartBtn.addEventListener('click', clearCart);
}



//function

function buyCart(e) {
  e.preventDefault();
  
  //Использует делегирование чтобы найти курс который был добавлен
  if(e.target.classList.contains('add')) {
    //Записывает значение в переменную
    var cart = e.target.parentElement.parentElement.parentElement.parentElement;
    
    //Записывает полученные значения
    
    getCartInfo(cart);
  }
}
//Записывает значения HTML выбранных карточек

function getCartInfo(cart) {
   //Создает Обьект с нужными данными карточек товара 
  var cartInfo = {
    image: cart.querySelector('img').src,
    title: cart.querySelector('h2').textContent,
    price: cart.querySelector('.catalog-item__price-wrapper p').textContent, 
    id: cart.querySelector('.add').getAttribute('data-id')
  }
  
  //Записывает все свойства обьекта в блок shoping-cart
  addIntoCart(cartInfo);
}

//Показать выбранную карточку товра в корзине
function addIntoCart(cart) {
  //создаем строку
  var row = document.createElement('tr');
  
  //Создает шаблон
  row.innerHTML = `
    <tr>
       <td>
           <img src="${cart.image}" width=200>
        </td>
          <td>
            ${cart.title}
        </td>
         <td>
            ${cart.price}
         </td>
         <td>
            <a href="#" class="remove" data-id="${cart.id}">X</a>
        </td>  
     </tr>`;
  //Добавляет созданую картчку в корзину
  shoppingCartContent.appendChild(row);
}

//Удаляет карточку товра из DOM
function removeCart(e) {
  //Удаляет по ссылке если есть класс remove
  if(e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
  }
}

//Удаляет все товары в корзине
function clearCart() {
//  shoppingCartContent.innerHTML = '';
  while(shoppingCartContent.firstChild) {
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
  }
}
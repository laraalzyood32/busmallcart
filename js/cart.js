/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
let tablecart=document.getElementById('cart');
tablecart.deleterow(table.rows.length-1);


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
let tablecart=document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (let i=0;i<cart.item.length;i++){
  // TODO: Create a TR
  let tr=document.createElement('tr');
  tablecart.appendChild(tr);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteitem=document.createElement('td');
  deleteitem.innerText='x';
  tr.appendChild(deleteitem);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  
  
  let quantityTd = document.createElement('td');
  quantityTd.innerText = cart.items[i].quantity;
  tr.appendChild(quantityTd);
  
  let itemTD=Document.createElement('td');
  itemTD.innerText=car.item[i].product;
  tr.appendChild(itemTD);

}

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
 if(event.target.innerText==='x'){
     cart.removeItemFromCart(event.target.id);
 }
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart',JSON.stringify(car.item));
  // TODO: Re-draw the cart table
renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
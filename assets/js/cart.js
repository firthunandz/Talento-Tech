document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const clearCart = document.getElementById('clear-cart');
  
  function updateCart() {
    cartItemsContainer.innerHTML = ''; 
    let total = 0;
    
    cart.forEach((product) => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${product.name} - ${product.quantity} x $${product.price} = $${product.total}`;
      cartItemsContainer.appendChild(cartItem);
      total += product.total;
    });

    cartTotal.textContent = total;
  }
  updateCart();
  clearCart.addEventListener('click', () => {
    cartItemsContainer.innerHTML = '';
    cartTotal.textContent = 0;
  
    localStorage.removeItem('cart');
  });
});


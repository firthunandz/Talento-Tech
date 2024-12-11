const decrementBtns = document.querySelectorAll('.card__btn-minus');
const incrementBtns = document.querySelectorAll('.card__btn-plus');
const addToCart = document.querySelectorAll('.buy-now');
const alertSuccess = document.getElementById('alert-success');

incrementBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.card__counter-score');
    let currentValue = parseInt(quantityElement.textContent, 10);
    quantityElement.textContent = currentValue + 1;
  });
});

decrementBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.card__counter-score');
    let currentValue = parseInt(quantityElement.textContent, 10);
    if(currentValue > 0){
      quantityElement.textContent = currentValue - 1;
    }
  });
});

function addToLocalStorage(producto) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(producto);
  localStorage.setItem('cart', JSON.stringify(cart));
}

addToCart.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const productName = card.querySelector('.card__title').textContent;
    const productPrice = parseFloat(card.querySelector('.card-price').textContent.replace('Precio: $', ''));
    const productQuantity = parseInt(card.querySelector('.card__counter-score').textContent, 10);
    if (productQuantity > 0){
      const product = {
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        total: productPrice*productQuantity
      };
      addToLocalStorage(product);

      const buttonRect = event.target.getBoundingClientRect();

      alertSuccess.style.top = `${buttonRect.top - alertSuccess.offsetHeight - 20}px`;
      alertSuccess.style.left = `${buttonRect.left + buttonRect.width / 5 - alertSuccess.offsetWidth / 2}px`;
  
      alertSuccess.classList.add('visible');
      alertSuccess.classList.remove('hidden');
  
      setTimeout(() => {
        alertSuccess.classList.remove('visible');
        alertSuccess.classList.add('hidden');
      }, 1000);
    }
  });
});
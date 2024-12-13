import { products } from "./productsList.js";

const productsContainer = document.getElementById('products-container');


function displayProducts(products){
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('article');
    productCard.classList.add('products-card');

    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div class="card__title">${product.name}</div>
      <div class="card__subtitle">${product.description}</div>
      <div class="card__wrapper">
        <div class="card__price">$<span class="card-price">${product.price}</span></div>
        <div class="card__counter">
          <button class="card__btn card__btn-minus">-</button>
          <div class="card__counter-score">0</div>
          <button class="card__btn card__btn-plus">+</button>
        </div>
      </div>
      <button class="buy-now">
        <svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
        <p class="text">Buy Now</p>
      </button>
    `;
    productsContainer.appendChild(productCard);
  })

  attachEventListeners();
}

function attachEventListeners() {
  const decrementBtns = document.querySelectorAll('.card__btn-minus');
  const incrementBtns = document.querySelectorAll('.card__btn-plus');
  const addToCartBtns = document.querySelectorAll('.buy-now');

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
      if (currentValue > 0) {
        quantityElement.textContent = currentValue - 1;
      }
    });
  });

  addToCartBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = button.parentElement;
      const productName = card.querySelector('.card__title').textContent;
      const productPrice = parseFloat(card.querySelector('.card-price').textContent);
      const productQuantity = parseInt(card.querySelector('.card__counter-score').textContent, 10);


      if (productQuantity > 0) {
        const product = {
          name: productName,
          price: productPrice,
          quantity: productQuantity,
          total: productPrice * productQuantity,
        };

        addToLocalStorage(product);

        alert('Agregado al carrito correctamente')
      }
    });
  });
}

function addToLocalStorage(producto) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(producto);
  localStorage.setItem('cart', JSON.stringify(cart));
}

displayProducts(products);
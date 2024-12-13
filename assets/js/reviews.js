const reviewsContainer = document.getElementById('reviews-container');

async function fetchReviews() {
  try {
    const response = await fetch('./assets/js/reviewsData.json'); // Cambia la ruta según dónde guardaste el JSON
    if (!response.ok) {
      throw new Error(`Error al cargar las reseñas: ${response.statusText}`);
    }
    const reviews = await response.json();
    displayReviews(reviews);
  } catch (error) {
    console.error(error);
  }
}

function displayReviews(reviews) {
  reviewsContainer.innerHTML = ''
  reviews.forEach(review => {
    const reviewCard = document.createElement('article');
    reviewCard.classList.add('review-card');

    reviewCard.innerHTML = `
          <h3 class="review-name">${review.name}</h3>
          <p class="review-prof">${review.occupation}</p>
          <h4 class="review-value">${review.value}</h4>
          <p class="review-message">${review.comment}</p>
    `;

    reviewsContainer.appendChild(reviewCard);
  });
}

fetchReviews();
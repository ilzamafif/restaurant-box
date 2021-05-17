import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (detail) => `
  <div class="card-wrapper">
    <div class="restaurant-image">
        <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" width="100%" alt="${detail.name}" />
    </div>
    <div class="restaurant-content">
      <h3 class="restaurant-title" tabindex="0">${detail.name}</h3>
      <div class="restaurant-city" tabindex="0"><span>City</span> : ${detail.city}</div>
      <div class="rating" tabindex="0">
        <span class="iconify star" data-icon="bi:star-fill" data-inline="false"></span> <span>${detail.rating}</span>
      </div>
      <div class="restaurant-address" tabindex="0"><span>Address</span> : ${detail.address}</div>
      <div class="restaurant-detail" tabindex="0">
        <p tabindex="0">${detail.description}</p>
        <ul tabindex="0">
          Categories : ${detail.categories.map((categori) => `<li>${categori.name}</li>`).join('')}
        </ul>
        <ul tabindex="0">
          Foods menu : ${detail.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
        <ul tabindex="0">
          Drinks menu :${detail.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
        <div class="detail-review" tabindex="0">
          ${detail.customerReviews.map((review) => `
                <div class="detail-review-item" tabindex="0">
                  <div class="review-header" tabindex="0">
                    <p class="review-name" tabindex="0">${review.name}</p>
                    <p class="review-date" tabindex="0">${review.date}</p>
                  </div>
                  <div class="review-body" tabindex="0">
                    ${review.review}
                  </div>
                </div>
                `).join('')}
          </div>
      </div>
    </div>
  </div>
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card" tabindex="0">
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="100%" alt="${restaurant.name}" />
      <div class="card-content">
          <div class="card-content-head">
            <a href="${`/#/detail/${restaurant.id}`}">
             <h3 class="title" tabindex"0">${restaurant.name}</h3>
            </a>
          <div class="rating" tabindex="0">
            <span class="iconify star" data-icon="bi:star-fill" data-inline="false"></span>
            <p>${restaurant.rating}</p>
          </div>
        </div>
        <h3 class="city" tabindex="0">Loc : ${restaurant.city}</h3>
        <p tabindex="0">
          ${restaurant.description}
        </p>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurnt" id="likeButton" class="like" tabindex="0">
     <span class="iconify" data-icon="akar-icons:heart" data-inline="false"></span>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurnt" id="likeButton" class="like" tabindex="0">
    <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};

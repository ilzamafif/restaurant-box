import CONFIG from "../../globals/config";

const createMovieDetailTemplate = (detail) => {
  return `<div class="card-wrapper">
            <div class="restaurant-image">
               <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" width="100%" alt="${detail.name}" />
            </div>
            <div class="restaurant-content">
              <h3 class="restaurant-title">${detail.name}</h3>
              <div class="restaurant-city"><span>City</span> : ${detail.city}</div>
              <div class="rating">
                <span class="iconify star" data-icon="bi:star-fill" data-inline="false"></span> <span>${detail.rating}</span>
              </div>
              <div class="restaurant-address"><span>Address</span> : ${detail.address}</div>
              <div class="restaurant-detail">
                <p>${detail.description}</p>
                <ul>
                  Categories : ${detail.categories.map((categori) => `<li>${categori.name}</li>`).join("")}
                </ul>
                <ul>
                  Foods menu : ${detail.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
                </ul>
                <ul>
                  Drinks menu :${detail.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}
                </ul>
                <div class="detail-review">
                  ${detail.customerReviews
                    .map(
                      (review) => `
                        <div class="detail-review-item">
                          <div class="review-header">
                            <p class="review-name">${review.name}</p>
                            <p class="review-date">${review.date}</p>
                          </div>
                          <div class="review-body">
                            ${review.review}
                          </div>
                        </div>
                       `
                    )
                    .join("")}     
                </div>
              </div>
            </div>
          </div>
          `;
};

const createMovieItemTemplate = (restaurant) => `
  <div class="card" tabindex="0">
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="100%" alt="${restaurant.name}" />
      <div class="card-content">
        <div class="card-content-head">
          <h3 class="title" tabindex"0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
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
  <button aria-label="like this movie" id="likeButton" class="like">
    <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <span class="iconify" data-icon="akar-icons:heart" data-inline="false"></span>
  </button>
`;

export { createMovieItemTemplate, createMovieDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };

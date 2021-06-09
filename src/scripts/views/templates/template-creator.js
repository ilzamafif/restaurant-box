import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (detail) => `
  <div class="card-detail">
    <figure class="restaurant-image">
      <img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="${detail.name}" />
    </figure>
    <div class="restaurant-detail-content">
      <div class="restaurant-detail">
        <h3 class="restaurant-title" tabindex="0">${detail.name}</h3>
        <div class="rating" tabindex="0">
          <span class="iconify iconify-star" data-icon="bi:star-fill" data-inline="false"></span> <span class="rating-text">${detail.rating}</span>
        </div>
        <div class="restaurant-desc" tabindex="0">${detail.description}</div>
        <div class="restaurant-location" tabindex="0"><span>Location</span> : ${detail.address}, ${detail.city}</div>
      </div>
      <div class="detail-menu" tabindex="0">
        <p class="detail-menu-title" tabindex="0">Kategori</p>
        ${detail.categories.map((categori) => `<span class="category-name">${categori.name}</span>`).join('')}
        <p class="detail-menu-title" tabindex="0">Daftar Makanan</p>
        ${detail.menus.foods.map((food) => `<span class="food-name">${food.name}</span> `)}
        <p class="detail-menu-title" tabindex="0">Daftar Minuman</p>
        ${detail.menus.drinks.map((drink) => `<span class="drink-name">${drink.name}</span> `)}
      </div>
    </div>
    <div class="review" tabindex="0">
      <h1 class="review-title" tabindex="0">Review</h1>
      <div class="review-container" tabindex="0">
       ${detail.customerReviews.map((review) => `
        <div class="review-item" tabindex="0">
          <p class="review-name" tabindex="0">${review.name}</p>
          <p class="review-date" tabindex="0">${review.date}</p>
          <p class="review-comment" tabindex="0">${review.review}</p>
        </div>`).join('')}
      </div>      
    </div>
  </div>`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card" tabindex="0">
    <figure>
      <img class="restaurant-image lazyload" alt="image ${restaurant.name}"
      data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous"/>
    </figure>
    <div class="card-content">
      <h3 class="card-title" tabindex"0">
        <a href="${`/#/detail/${restaurant.id}`}" class="card-link">
          ${restaurant.name}
        </a>
      </h3>
      <div class="rating" tabindex="0">
        <span class="iconify iconify-star" data-icon="bi:star-fill" data-inline="false"></span>
        <p>${restaurant.rating}</p>
      </div>
      <h3 class="restaurant-city" tabindex="0">Loc : ${restaurant.city}</h3>
      <p tabindex="0" class="restaurant-desc">
        ${restaurant.description}
      </p>
    </div>
  </div>
  `;

const createSkeletonRestaurantItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
   <div class="card" tabindex="0">
    <figure ">
      <img class="restaurant-image" alt="image skeleton" src="./images/placeholder.png" width="100%" crossorigin="anonymous"/>
    </figure>
    <div class="card-content">
      <h3 class="card-title" tabindex"0">
        <p class="card-link">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </h3>
      <div class="rating" tabindex="0">
        <span class="iconify iconify-star" data-icon="bi:star-fill" data-inline="false"></span>
        <p>5</p>
      </div>
      <h3 class="restaurant-city" tabindex="0">Loc : Lorem ipsum dolor sit amet consectetur</h3>
      <p tabindex="0" class="restaurant-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum adipisci fuga impedit sunt, quas dolore vero possimus iure quasi rerum, temporibus voluptates, debitis nemo. At consequatur voluptatum sapiente quia dolores, aut doloremque ut magnam illum velit ex aliquid beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum adipisci fuga impedit sunt, quas dolore vero possimus iure quasi rerum, temporibus voluptates, debitis nemo. At consequatur voluptatum sapiente quia dolores, aut doloremque ut magnam illum velit ex aliquid beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum adipisci fuga impedit sunt, quas dolore vero possimus iure quasi rerum, temporibus voluptates, debitis nemo. At consequatur voluptatum sapiente quia dolores, aut doloremque ut magnam illum velit ex aliquid beatae?
      </p>
    </div>
  </div>
  `;
  }
  return template;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
     <span class="iconify" data-icon="akar-icons:heart" data-inline="false"></span>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
    <span class="iconify" data-icon="ant-design:heart-filled" data-inline="false"></span>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate, createSkeletonRestaurantItemTemplate
};

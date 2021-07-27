import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresanter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
  async render() {
    return `
        <section class="detail-restaurant-content">
          <h2 class="detail-label" tabindex="0">Detail Restourant</h2>
          <div id='detail-posts'></div>
          <div id='likeButtonContainer'></div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-posts');

    restaurantContainer.innerHTML += createRestaurantDetailTemplate(data.restaurant);

    await LikeButtonPresanter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      data,
    });
  },
};

export default Detail;

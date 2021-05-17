import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div tabindex='0' class='list'>
          <h2 class='list__label'>Detail Restourant</h2>
        </div>
        <div id='posts-detail'></div>
        <div id='likeButtonContainer'></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#posts-detail');

    restaurantContainer.innerHTML += createRestaurantDetailTemplate(data.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });
  },
};

export default Detail;

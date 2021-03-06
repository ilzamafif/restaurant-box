import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="restaurant-content">
        <h2 class="list-label" tabindex="0">Restourant Favorit</h2>
        <div id="posts"></div>
      </section>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const dataContainer = document.querySelector('#posts');
    if (data.length === 0) {
      dataContainer.innerHTML = '<favorite-message></favorite-message>';
    }

    data.forEach((restaurant) => {
      dataContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;

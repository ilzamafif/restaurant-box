import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <section class="restaurant-content">
            <h2 class="list-label" tabindex="0">Restourant List</h2>
            <div id="posts">
              ${createSkeletonRestaurantItemTemplate(20)}
            </div>
          </section>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    restaurantsContainer.innerHTML = '';
    try {
      data.restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      restaurantsContainer.innerHTML = '<error-message></error-message>';
    }
  },
};

export default Home;

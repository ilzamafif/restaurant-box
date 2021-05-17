import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div tabindex='0' class='list'>
            <h2 class='list__label'>Restourant List</h2>
          </div>
          <div id='posts'></div>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

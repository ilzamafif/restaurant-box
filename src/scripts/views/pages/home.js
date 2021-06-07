import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <section class="restaurant-content">
            <h2 class="list__label" tabindex="0">Restourant List</h2>
            <div id="posts"></div>
          </section>
    `;
  },

  async afterRender() {
    

    try {
      const data = await RestaurantSource.listRestaurant();
      const restaurantsContainer = document.querySelector('#posts');
      data.restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    
    } catch (error) {
      console.log(error);
      restaurantsContainer.innerHTML = '<error-message></error-message>';
    }

  },
};

export default Home;

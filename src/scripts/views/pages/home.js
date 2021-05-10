import RestaurantSource from "../../data/restaurant-source";
import { createMovieItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
          <div tabindex="0" class="list">
            <h2 class="list__label">Restourant List</h2>
          </div>
          <div id="posts"></div>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.listRestaurant();
    const moviesContainer = document.querySelector("#posts");
    data.restaurants.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
    });
  },
};

export default Home;

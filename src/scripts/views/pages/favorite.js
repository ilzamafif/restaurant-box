import FavoriteRestaurantIdb from "../../data/restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
     <section class="restaurant-content">
        <div tabindex="0" class="list">
          <h2 class="list__label">Your Favorite Restaurant List</h2>
        </div>
        <div id="posts"></div>
      </section>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const dataContainer = document.querySelector("#posts");
    data.forEach((restaurant) => {
      dataContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;

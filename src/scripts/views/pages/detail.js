import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createMovieDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        <div tabindex="0" class="list">
          <h2 class="list__label">Detail Restourant</h2>
        </div>
        <div id="posts-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const movieContainer = document.querySelector("#posts-detail");

    movieContainer.innerHTML += createMovieDetailTemplate(data.restaurant);
  },
};

export default Detail;

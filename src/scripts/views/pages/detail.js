import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="main">
          <div class="title-restaurant">Derail</div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    console.log(data);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;

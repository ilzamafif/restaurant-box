import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

fetch("DATA.JSON")
  .then((respose) => respose.json())
  .then((result) => {
    restaurantList(result);
  });

function restaurantList(result) {
  let restaurant = "";
  let menu = result.restaurants;
  menu.forEach((res, i) => {
    restaurant += /*html*/ `
    <div class="card" tabindex="0">
      <img tabindex="0" src="${res.pictureId}" width="250px" alt="${res.name}" />
      <div class="card-content">
        <div class="card-content-head">
          <h3 class="title" tabindex="0">${res.name}</h3>
          <div class="rating" tabindex="0">
            <span class="iconify star" data-icon="bi:star-fill" data-inline="false"></span>
            <p>${res.rating}</p>
          </div>
        </div>
        <h3 class="city" tabindex="0">Loc : ${res.city}</h3>
        <p tabindex="0">
          ${res.description}
        </p>
      </div>
    </div>
    `;
  });

  document.querySelector("#posts").innerHTML = restaurant;
}

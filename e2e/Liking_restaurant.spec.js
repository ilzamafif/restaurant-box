/* eslint-disable no-undef */
const assert = require('assert');
Feature('Liking restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const messageText = 'Data restaurant favorit masih kosong';

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#posts');
  I.see(messageText, 'favorite-message');
});

Scenario('like and unlike one restaurant', async (I) => {
  // Like restoran
  I.see(messageText, 'favorite-message');

  I.amOnPage('/');

  I.waitForElement('h3.card-title .card-link', 10);

  I.seeElement('h3.card-title .card-link');

  const firstRestaurant = locate('h3.card-title .card-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likeRestaurantTitle = await I.grabTextFrom('h3.card-title');
  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);

  // Unlike restoran
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-message');

  const favPageMessage = await I.grabTextFrom('p.favorite-page-message');
  assert.strictEqual(favPageMessage, messageText);
});

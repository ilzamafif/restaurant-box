class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Data restaurant favorit Kosong!</h1>
        <p class="favorite-page-message">Data restaurant favorit masih kosong</p>
      </div>
    `;
  }
}

customElements.define('favorite-message', FavoriteMessage);

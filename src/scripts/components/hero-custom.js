class HeroCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div tabindex="0" class="hero-inner">
          <h1 class="hero-title">Wisata Kuliner <span>Favorit</span> di <span>Indonesia</span></h1>
          <p class="hero-tagline">Restaurant Box menyediakan katalog tempat nongkrong terbaik di Indonesia</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-custom', HeroCustom);

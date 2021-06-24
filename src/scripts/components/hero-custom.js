class HeroCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div tabindex="0" class="hero__inner">
          <h1 class="hero__title">Explore the restaurant</h1>
          <div class="hero__tagline">You will feel pleasure that you have never felt</div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-custom', HeroCustom);

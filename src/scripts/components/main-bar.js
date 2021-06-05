class MainBar extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
     <main id="content">
        <section class="restaurant-content">
          <div tabindex="0" class="list">
            <h2 class="list__label">Restourant List</h2>
          </div>
          <div id="posts"></div>
        </section>
      </main>
    `;
  }
}

customElements.define('main-bar', MainBar);
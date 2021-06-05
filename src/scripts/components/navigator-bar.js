class Navigatorbar extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
      <div class="container">
        <div class="navbar-brand">
          <a href="#/home" class="navbar-brand-logo">Restourant Box</a>
        </div>
        <button id="menu" tabindex="0" class="bars-toggler" aria-label="click to show navbar">
          <span class="iconify" data-icon="la:bars" data-inline="false"></span>
        </button>
        <nav id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="http://github.com/ilzamafif">About</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('navigator-bar', Navigatorbar);
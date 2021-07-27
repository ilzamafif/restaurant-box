class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="footer" tabindex="0">
        <p>Copyright &copy;2021 | Restaurant Box</p>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);

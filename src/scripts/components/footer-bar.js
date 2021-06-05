class FooterBar extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <footer class="footer" tabindex="0">
      <p>Copyright &copy;2021 | Restaurant Box</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
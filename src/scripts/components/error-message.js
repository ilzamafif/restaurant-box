class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Gagal memuat konten!</h1>
        <p class="favorite-page-message">Silahkan refresh kembali halaman</p>
      </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="main">
          <div class="title-restaurant"> Restaurant</div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;

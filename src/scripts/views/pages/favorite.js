const Favorite = {
  async render() {
    return `
     <section class="restaurant-content">
        <div tabindex="0" class="list">
          <h2 class="list__label">Favorite List</h2>
        </div>
        <div id="posts"></div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

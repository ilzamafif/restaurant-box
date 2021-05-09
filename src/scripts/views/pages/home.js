const Home = {
  async render() {
    return `
      <section class="restaurant-content">
        <div tabindex="0" class="list">
          <h2 class="list__label">Restourant List</h2>
        </div>
        <div id="posts"></div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;

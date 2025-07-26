// main.js
const searchInput = document.querySelector('.search-box input');

if (searchInput) {
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      const query = this.value.toLowerCase();
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  });
}

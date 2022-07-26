let filteredProducts = [...products];
const productsSection = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companies = document.querySelector('.companies');

function displayProducts() {
  if (filteredProducts.length < 1) {
    productsSection.innerHTML = '<p>No products available<p/>';
    return;
  } else {
    productsSection.innerHTML = filteredProducts
      .map(({ id, title, image, price }) => {
        return `<article class="product" data-id="${id}">
          <img src="${image}" alt="" class="product-img img" />
          <footer>
            <h5 class="title">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
      })
      .join('');
  }
}

displayProducts();

function displayButtons() {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];

  companies.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
}

displayButtons();

companies.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('company-btn')) {
    if (target.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === target.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

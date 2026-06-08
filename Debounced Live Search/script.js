const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");
const statusText = document.getElementById("status");

const products = [
  "iPhone 15",
  "Samsung Galaxy S24",
  "OnePlus Nord",
  "MacBook Air",
  "Dell Inspiron",
  "HP Pavilion",
  "Sony Headphones",
  "Boat Earbuds",
  "Apple Watch",
  "Samsung TV",
  "Nike Shoes",
  "Adidas Hoodie",
  "Puma T-shirt",
  "Laptop Bag",
  "Wireless Mouse"
];

function displayResults(items) {
  resultList.innerHTML = "";

  if (items.length === 0) {
    resultList.innerHTML = `<p>No results found</p>`;
    return;
  }

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item;
    resultList.appendChild(div);
  });
}

function filterProducts(searchText) {
  const filteredItems = products.filter((product) =>
    product.toLowerCase().includes(searchText.toLowerCase())
  );

  displayResults(filteredItems);
  statusText.textContent = `${filteredItems.length} result(s) found`;
}

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedSearch = debounce(function () {
  const searchText = searchInput.value.trim();

  if (searchText === "") {
    displayResults(products);
    statusText.textContent = "Showing all products";
    return;
  }

  filterProducts(searchText);
}, 300);

searchInput.addEventListener("input", debouncedSearch);

displayResults(products);
statusText.textContent = "Showing all products";

const list = document.getElementById("list");

const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  title: `Product Item ${index + 1}`
}));

function renderItems() {
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.id = item.id;

    div.innerHTML = `
      <span>${item.title}</span>
      <button class="delete-btn">Delete</button>
    `;

    fragment.appendChild(div);
  });

  list.appendChild(fragment);
}

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const item = event.target.closest(".item");
    item.remove();
  }
});

renderItems();
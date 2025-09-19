// Example products data
const products = [
  {
    id: 1,
    name: "Red Sneakers",
    price: 50,
    color: "Red",
    size: "40",
    gender: "Men",
    image: "images/s1.jpeg"
  },
  {
    id: 2,
    name: "Blue Heels",
    price: 70,
    color: "Blue",
    size: "38",
    gender: "Women",
    image: "images/S2.jpg"
  },
  {
    id: 3,
    name: "Black Running Shoes",
    price: 90,
    color: "Black",
    size: "42",
    gender: "Unisex",
    image: "images/S3.jpg"
  }
  // Add more products as needed
];

const productList = document.getElementById("product-list");

// Render products
function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>$${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Apply filters
function applyFilters() {
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  const gender = document.getElementById("gender").value;

  const filtered = products.filter(p =>
    p.price >= minPrice &&
    p.price <= maxPrice &&
    (color === "" || p.color === color) &&
    (size === "" || p.size === size) &&
    (gender === "" || p.gender === gender)
  );

  renderProducts(filtered);
}

// Listen for changes
["min-price", "max-price", "color", "size", "gender"].forEach(id => {
  document.getElementById(id).addEventListener("input", applyFilters);
  document.getElementById(id).addEventListener("change", applyFilters);
});

// Initial render
renderProducts(products);

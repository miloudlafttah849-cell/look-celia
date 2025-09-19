let allProducts = [];
let filteredProducts = [];

const priceRanges = [
  { label: "2 - 9", min: 2, max: 9 },
  { label: "10 - 99", min: 10, max: 99 },
  { label: "100 - 500", min: 100, max: 500 },
  { label: "500+", min: 500, max: Infinity }
];

// Fetch product data
async function loadProducts() {
  try {
    const response = await fetch("products.json");
    allProducts = await response.json();
    filteredProducts = [...allProducts];
    renderProducts();
    renderFilters();
  } catch (err) {
    console.error("Error loading products.json:", err);
  }
}

// Render filters dynamically
function renderFilters() {
  const filterContainer = document.getElementById("filters");
  if (!filterContainer) return;

  filterContainer.innerHTML = `
    <h3>Filters</h3>
    <div>
      <label>Price:</label>
      ${priceRanges
        .map(
          (range, i) => `
          <div>
            <input type="checkbox" id="price-${i}" value="${i}" onchange="applyFilters()" />
            <label for="price-${i}">${range.label}</label>
          </div>
        `
        )
        .join("")}
    </div>
    <div>
      <label>Gender:</label>
      <select id="gender-filter" onchange="applyFilters()">
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
      </select>
    </div>
    <div>
      <label>Color:</label>
      <input type="text" id="color-filter" placeholder="e.g. black" oninput="applyFilters()" />
    </div>
    <div>
      <label>Size:</label>
      <input type="text" id="size-filter" placeholder="e.g. 42" oninput="applyFilters()" />
    </div>
  `;
}

// Apply filters
function applyFilters() {
  const gender = document.getElementById("gender-filter")?.value || "";
  const color = document.getElementById("color-filter")?.value.toLowerCase() || "";
  const size = document.getElementById("size-filter")?.value || "";

  const selectedPriceRanges = Array.from(
    document.querySelectorAll("input[id^='price-']:checked")
  ).map((el) => priceRanges[el.value]);

  filteredProducts = allProducts.filter((p) => {
    let genderMatch = !gender || p.gender === gender;
    let colorMatch = !color || p.colors.some((c) => c.toLowerCase().includes(color));
    let sizeMatch = !size || p.sizes.includes(size);

    let priceMatch =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => p.price >= range.min && p.price <= range.max);

    return genderMatch && colorMatch && sizeMatch && priceMatch;
  });

  renderProducts();
}

// Render products
function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = filteredProducts
    .map(
      (p) => `
    <div class="product-card" onclick="openPopup(${p.id})">
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>$${p.price}</p>
    </div>
  `
    )
    .join("");
}

// Popup
function openPopup(id) {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  const popup = document.getElementById("product-popup");
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn" onclick="closePopup()">&times;</span>
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Gender:</strong> ${product.gender}</p>
      <p><strong>Available Sizes:</strong> ${product.sizes.join(", ")}</p>
      <p><strong>Colors:</strong> ${product.colors.join(", ")}</p>
      <a href="https://wa.me/?text=Check this product: ${encodeURIComponent(
        product.image
      )}" target="_blank" class="whatsapp-link">Share on WhatsApp</a>
    </div>
  `;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("product-popup").style.display = "none";
}

function showPopup(product) {
  const popup = document.getElementById("product-popup");

  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn" onclick="closePopup()">&times;</span>
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
      <a class="whatsapp-link" 
         href="https://wa.me/?text=I%20am%20interested%20in%20product%20ID:%20${product.id}" 
         target="_blank">📩 Ask on WhatsApp</a>
    </div>
  `;

  popup.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", loadProducts);

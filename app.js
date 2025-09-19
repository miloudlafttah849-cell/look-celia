async function loadProducts() {
  const res = await fetch("products.json");
  allProducts = await res.json();
  applyFilters();
}

function applyFilters() {
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  const gender = document.getElementById("gender").value;

  const filtered = allProducts.filter(p => {
    return (
      p.price >= minPrice &&
      p.price <= maxPrice &&
      (color === "" || p.color === color) &&
      (size === "" || p.size === size) &&
      (gender === "" || p.gender === gender)
    );
  });

  renderProducts(filtered);
}

function renderProducts(products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
    `;
    card.onclick = () => showPopup(product);
    list.appendChild(card);
  });
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

function closePopup() {
  document.getElementById("product-popup").style.display = "none";
}

document.querySelectorAll("#filters input, #filters select")
  .forEach(el => el.addEventListener("input", applyFilters));

loadProducts();

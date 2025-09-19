const products = [
  { id: 1, name: "Sport Shoes S1", price: 15, color: "Red", size: "40", gender: "Men", image: "images/s1.jpeg" },
  { id: 2, name: "Sport Shoes S2", price: 25, color: "Blue", size: "42", gender: "Women", image: "images/S2.jpg" },
  { id: 3, name: "Sport Shoes S3", price: 30, color: "Black", size: "38", gender: "Unisex", image: "images/S3.jpg" },
  { id: 4, name: "Sport Shoes S4", price: 45, color: "White", size: "40", gender: "Men", image: "images/S4.jpeg" },
  { id: 5, name: "Sport Shoes S5", price: 50, color: "Red", size: "42", gender: "Women", image: "images/S5.jpg" },
  { id: 6, name: "Sport Shoes S6", price: 60, color: "Blue", size: "38", gender: "Unisex", image: "images/S6.jpeg" },
  { id: 7, name: "Sport Shoes S7", price: 70, color: "Black", size: "40", gender: "Men", image: "images/S7.jpeg" },
  { id: 8, name: "Sport Shoes S8", price: 80, color: "White", size: "42", gender: "Women", image: "images/s8.jpg" },
  { id: 9, name: "Sport Shoes S9", price: 90, color: "Red", size: "38", gender: "Unisex", image: "images/S9.jpeg" },
  { id: 10, name: "Sport Shoes S10", price: 100, color: "Blue", size: "40", gender: "Men", image: "images/s10.webp" },
  { id: 11, name: "Sport Shoes S11", price: 110, color: "Black", size: "42", gender: "Women", image: "images/s11.jpg" },
  { id: 12, name: "Sport Shoes S12", price: 120, color: "White", size: "38", gender: "Unisex", image: "images/S12.jpeg" },
  { id: 13, name: "Sport Shoes S13", price: 130, color: "Red", size: "40", gender: "Men", image: "images/S13.jpg" },
  { id: 14, name: "Sport Shoes S14", price: 140, color: "Blue", size: "42", gender: "Women", image: "images/S14.jpeg" },
  { id: 15, name: "Sport Shoes S15", price: 150, color: "Black", size: "38", gender: "Unisex", image: "images/s15.webp" },
  { id: 16, name: "Sport Shoes S16", price: 160, color: "White", size: "40", gender: "Men", image: "images/S16.jpeg" },
  { id: 17, name: "Sport Shoes S17", price: 170, color: "Red", size: "42", gender: "Women", image: "images/S17.jpg" }
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
      <a href="https://wa.me/?text=I%20am%20interested%20in%20${encodeURIComponent(p.name)}%20(ID:%20${p.id})%20Image:%20${encodeURIComponent(window.location.origin + '/' + p.image)}"
         target="_blank" class="whatsapp-link">
        Share on WhatsApp
      </a>
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

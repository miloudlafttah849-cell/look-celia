// =================== PRODUCTS DATA ===================
const products = [
  {
  id: 1,
    name: "Trail Runner X",
    price: 59.99,
    color: "Red",
    size: "M",
    gender: "Unisex",
    images: ["/images/s1.jpeg", "/images/s1 copy.jpeg", "/images/s1 copy 2.jpeg"],
    description: "Durable trail running shoes designed for stability and grip."
  },
  {
    id: 2,
    name: "Urban Flex",
    price: 64.50,
    color: "Blue",
    size: "L",
    gender: "Men",
    images: ["/images/S2.jpg", "/images/S2 copy.jpg", "/images/S2 copy 2.jpg"],
    description: "Modern sneakers for everyday city wear with extra comfort."
  },
  {
    id: 3,
    name: "Aero Swift",
    price: 72.00,
    color: "Black",
    size: "S",
    gender: "Women",
    images: ["/images/S3.jpg", "/images/S3 copy.jpg", "/images/S3 copy 2.jpg"],
    description: "Lightweight black trainers built for speed and agility."
  },
  {
    id: 4,
    name: "Power Stride",
    price: 80.00,
    color: "White",
    size: "M",
    gender: "Unisex",
    images: ["/images/S4.jpeg", "/images/S4 copy.jpeg", "/images/S4 copy 2.jpeg"],
    description: "Classic white performance shoes with a minimal design."
  },
  {
    id: 5,
    name: "Enduro Grip",
    price: 68.99,
    color: "Green",
    size: "XL",
    gender: "Men",
    images: ["/images/S5.jpg", "/images/S5 copy.jpg", "/images/S5 copy 2.jpg"],
    description: "Green outdoor sneakers built for endurance and traction."
  },
  {
    id: 6,
    name: "Air Motion",
    price: 75.00,
    color: "Pink",
    size: "M",
    gender: "Women",
    images: ["/images/S6.jpeg", "/images/S6 copy.jpeg", "/images/S6 copy 2.jpeg"],
    description: "Stylish pink sneakers designed for lightweight comfort."
  },
  {
    id: 7,
    name: "Velocity Pro",
    price: 85.50,
    color: "Gray",
    size: "L",
    gender: "Unisex",
    images: ["/images/S7.jpeg", "/images/S7 copy.jpeg", "/images/S7 copy 2.jpeg"],
    description: "Gray training shoes engineered for maximum performance."
  },
  {
    id: 8,
    name: "Energy Burst",
    price: 92.00,
    color: "Yellow",
    size: "S",
    gender: "Women",
    images: ["/images/s8.jpg", "/images/s8 copy.jpg", "/images/s8 copy 2.jpg"],
    description: "Vibrant yellow trainers with shock-absorbing soles."
  },
  {
    id: 9,
    name: "Core Balance",
    price: 70.00,
    color: "Black",
    size: "M",
    gender: "Unisex",
    images: ["/images/S9.jpeg", "/images/S9 copy.jpeg", "/images/S9 copy 2.jpeg"],
    description: "Black fitness sneakers for balance and stability training."
  },
  {
    id: 10,
    name: "Pulse Flow",
    price: 78.90,
    color: "Blue",
    size: "L",
    gender: "Men",
    images: ["/images/s10.webp", "/images/s10 copy.webp", "/images/s10 copy 2.webp"],
    description: "Blue lifestyle sneakers that combine style and performance."
  },
  {
    id: 11,
    name: "Fusion Run",
    price: 82.50,
    color: "White",
    size: "S",
    gender: "Women",
    images: ["/images/s11.jpg", "/images/s11 copy.jpg", "/images/s11 copy 2.jpg"],
    description: "White running shoes with a fusion of comfort and speed."
  },
  {
    id: 12,
    name: "Ignite Speed",
    price: 95.00,
    color: "Red",
    size: "M",
    gender: "Unisex",
    images: ["/images/S12.jpeg", "/images/S12 copy.jpeg", "/images/S12 copy 2.jpeg"],
    description: "High-energy red trainers built for explosive workouts."
  },
  {
    id: 13,
    name: "Cloud Glide",
    price: 89.99,
    color: "Gray",
    size: "L",
    gender: "Men",
    images: ["/images/S13.jpg", "/images/S13 copy.jpg", "/images/S13 copy 2.jpg"],
    description: "Soft gray trainers designed for cloud-like comfort."
  },
  {
    id: 14,
    name: "Sprint Evo",
    price: 99.00,
    color: "Pink",
    size: "S",
    gender: "Women",
    images: ["/images/S14.jpeg", "/images/S14 copy.jpeg", "/images/S14 copy 2.jpeg"],
    description: "Fast pink sneakers for sprint and agility training."
  },
  {
    id: 15,
    name: "Prime Force",
    price: 105.00,
    color: "Black",
    size: "M",
    gender: "Unisex",
    images: ["/images/s15.webp", "/images/s15 copy.webp", "/images/s15 copy 2.webp"],
    description: "Premium black sneakers engineered for long-lasting use."
  },
  {
    id: 16,
    name: "Ultra Boost",
    price: 110.00,
    color: "White",
    size: "XL",
    gender: "Men",
    images: ["/images/S16.jpeg", "/images/S16 copy.jpeg", "/images/S16 copy 2.jpeg"],
    description: "White training shoes with ultra cushioning technology."
  },
  {
    id: 17,
    name: "Hyper Edge",
    price: 115.00,
    color: "Yellow",
    size: "S",
    gender: "Women",
    images: ["/images/S17.jpg", "/images/S17 copy.jpg", "/images/S17 copy 2.jpg"],
    description: "Yellow trainers with sharp design and superior comfort."
  }
];

// =================== GLOBAL VARS ===================
let currentSlide= 0;
let startX= 0;
let isDragging = false;

// =================== RENDER PRODUCTS ===================
function renderProducts(filtered = products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  filtered.forEach((product) => {
  const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" onclick="openProductPopup(${product.id})">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="shareOnWhatsApp(${product.id})">Share</button>
    `;
    container.appendChild(item);
  });
}

// =================== FILTER PRODUCTS ===================
function applyFilters() {
  const color= document.getElementById("color").value.toLowerCase();
  const size= document.getElementById("size").value.toLowerCase();
  const gender= document.getElementById("gender").value.toLowerCase();
  const minPrice= parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice= parseFloat(document.getElementById("maxPrice").value) || Infinity;
  
  const filtered = products.filter((p) => {
    return (
      (color === "" || p.color.toLowerCase() === color) &&
      (size === "" || p.size.toLowerCase() === size) &&
      (gender === "" || p.gender.toLowerCase() === gender) &&
      p.price >= minPrice &&
      p.price <= maxPrice
    );
  });

  renderProducts(filtered);
}

// =================== WHATSAPP SHARE ===================
function shareOnWhatsApp(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const url= `https://cuddly-sniffle-5gp6pxjq494qfpvjg-3002.app.github.dev#product_id=${product.id}`;
  const message = `Hi! I am interested in ${product.name}. \n${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
}

// =================== PRODUCT POPUP ===================
function openProductPopup(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal= document.getElementById("product-modal");
  const modalContent = document.querySelector(".modal-content");
  modal.style.display = "flex";

  modalContent.innerHTML = `
    <span class="close-btn" onclick="closeProductPopup()">&times;</span>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <div class="carousel">
      <button class="carousel-btn prev" onclick="moveCarousel(-1)">&#10094;</button>
      <div class="carousel-track">
        ${product.images
          .map((img) => `<img src="${img}" alt="${product.name}">`)
          .join("")}
      </div>
      <button class="carousel-btn next" onclick="moveCarousel(1)">&#10095;</button>
    </div>
    <p class="price">Price: $${product.price.toFixed(2)}</p>
    <button onclick="shareOnWhatsApp(${product.id})">Share on WhatsApp</button>
  `;

  currentSlide = 0;
  updateCarousel();

  // Add swipe support
  const track= modalContent.querySelector(".carousel-track");
  track.addEventListener("touchstart", handleTouchStart, { passive: true });
  track.addEventListener("touchmove", handleTouchMove, { passive: true });
  track.addEventListener("touchend", handleTouchEnd);
}

function closeProductPopup() {
  const modal = document.getElementById("product-modal");
  modal.style.display= "none";
}

// =================== CAROUSEL ===================
function updateCarousel() {
  const track= document.querySelector(".carousel-track");
  const slides= document.querySelectorAll(".carousel-track img");
  if (!track || slides.length === 0) return;
  
  const width = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentSlide * width}px)`;
}

function moveCarousel(direction) {
  const slides = document.querySelectorAll(".carousel-track img");
  if (slides.length === 0) return;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  updateCarousel();
}

// =================== TOUCH SWIPE ===================
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
}

function handleTouchMove(e) {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      moveCarousel(1); // swipe left
    } else {
      moveCarousel(-1); // swipe right
    }
    isDragging = false;
  }
}

function handleTouchEnd() {
  isDragging = false;
}

// =================== INIT ===================
window.onload = () => {
  if (document.readyState === 'complete') {
    renderProducts();
    applyFilters();
  }
};

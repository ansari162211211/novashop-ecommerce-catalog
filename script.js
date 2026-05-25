function buildAmazonUrl(query) {
  return `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
}

function buildFlipkartUrl(query) {
  return `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;
}

function product(store, searchQuery, data) {
  return {
    ...data,
    store,
    buyUrl:
      store === "Amazon"
        ? buildAmazonUrl(searchQuery)
        : buildFlipkartUrl(searchQuery),
  };
}

const products = [
  product("Amazon", "Apple Watch Series 9 GPS", {
    id: 1,
    name: "Apple Watch Series 9",
    category: "electronics",
    price: "₹41,900",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
    description: "GPS smartwatch with health tracking and always-on display.",
  }),
  product("Amazon", "Sony WH-1000XM5 wireless headphones", {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "electronics",
    price: "₹26,990",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    description: "Industry-leading noise cancelling wireless headphones.",
  }),
  product("Flipkart", "Nike Air Max 270 running shoes men", {
    id: 3,
    name: "Nike Air Max Sneakers",
    category: "fashion",
    price: "₹8,995",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    description: "Lightweight running shoes with responsive cushioning.",
  }),
  product("Amazon", "American Tourister laptop backpack 32L", {
    id: 4,
    name: "American Tourister Backpack",
    category: "accessories",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description: "Durable 32L laptop backpack with water-resistant fabric.",
  }),
  product("Amazon", "Samsung Galaxy S24 5G smartphone", {
    id: 5,
    name: "Samsung Galaxy S24",
    category: "electronics",
    price: "₹74,999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    description: "Flagship AI phone with pro-grade camera and vivid display.",
  }),
  product("Flipkart", "Levis men denim trucker jacket", {
    id: 6,
    name: "Levi's Denim Jacket",
    category: "fashion",
    price: "₹3,999",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.ZPnZntCCQ7ckPIpKp_ry4QHaJQ?pid=Api&P=0&h=180",
    description: "Classic trucker jacket in premium washed denim.",
  }),
  product("Amazon", "Ray-Ban RB3025 Aviator sunglasses", {
    id: 7,
    name: "Ray-Ban Aviator Sunglasses",
    category: "accessories",
    price: "₹9,490",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    description: "Iconic polarized sunglasses with UV protection.",
  }),
  product("Flipkart", "boAt Airdopes 441 TWS earbuds", {
    id: 8,
    name: "Boat Airdopes 441",
    category: "electronics",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    description: "True wireless earbuds with 30h playback and fast charge.",
  }),
  product("Amazon", "Fossil Gen 6 smartwatch Wear OS", {
    id: 9,
    name: "Fossil Gen 6 Smartwatch",
    category: "electronics",
    price: "₹14,995",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    description: "Wear OS watch with heart rate, GPS, and Google Pay.",
  }),
  product("Flipkart", "Puma dry fit running t shirt men", {
    id: 10,
    name: "Puma Running T-Shirt",
    category: "fashion",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    description: "Dry-fit breathable tee for gym and outdoor workouts.",
  }),
  product("Amazon", "Fire Boltt smart ring fitness tracker", {
    id: 11,
    name: "Fire-Boltt Smart Ring",
    category: "accessories",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    description: "Sleek fitness ring tracking sleep, SpO2, and steps.",
  }),
  product("Flipkart", "Dell Inspiron 15 laptop Intel i5", {
    id: 12,
    name: "Dell Inspiron 15 Laptop",
    category: "electronics",
    price: "₹52,990",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    description: '15.6" FHD laptop with Intel Core i5 and 16GB RAM.',
  }),
  product("Amazon", "Apple iPad 10th generation tablet", {
    id: 13,
    name: "Apple iPad (10th Gen)",
    category: "electronics",
    price: "₹34,900",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200&auto=format&fit=crop",
    description: "Versatile tablet for work, study, and entertainment.",
  }),
  product("Flipkart", "Logitech MX Master 3S wireless mouse", {
    id: 14,
    name: "Logitech MX Master Mouse",
    category: "electronics",
    price: "₹9,995",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop",
    description: "Ergonomic wireless mouse with precision scrolling.",
  }),
  product("Amazon", "Adidas Ultraboost 22 running shoes", {
    id: 15,
    name: "Adidas Ultraboost Shoes",
    category: "fashion",
    price: "₹12,999",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Boost cushioning for long runs and daily comfort.",
  }),
  product("Flipkart", "Titan leather wallet men", {
    id: 16,
    name: "Titan Leather Wallet",
    category: "accessories",
    price: "₹1,495",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
    description: "Premium leather wallet with multiple card slots.",
  }),
  product("Amazon", "Philips HD9200 air fryer", {
    id: 17,
    name: "Philips Air Fryer",
    category: "home",
    price: "₹8,999",
    image:
      "https://images.pexels.com/photos/6143822/pexels-photo-6143822.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Healthy frying with rapid air technology and easy clean.",
  }),
  product("Flipkart", "JBL Flip 6 portable bluetooth speaker", {
    id: 18,
    name: "JBL Flip 6 Speaker",
    category: "electronics",
    price: "₹11,999",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1200&auto=format&fit=crop",
    description: "Waterproof portable speaker with powerful bass.",
  }),
  product("Amazon", "OnePlus Nord CE 4 5G smartphone", {
    id: 19,
    name: "OnePlus Nord CE 4",
    category: "electronics",
    price: "₹24,999",
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Fast 5G phone with smooth display and solid battery.",
  }),
  product("Flipkart", "Canon EOS 1500D DSLR camera", {
    id: 20,
    name: "Canon EOS DSLR Camera",
    category: "electronics",
    price: "₹38,990",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    description: "Beginner-friendly DSLR for photography enthusiasts.",
  }),
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const cartTotalItems = document.getElementById("cartTotalItems");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const shopBtn = document.querySelector(".shop-btn");

let cart = [];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      buyUrl: product.buyUrl,
      store: product.store,
      qty: 1,
    });
  }

  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  showToast("Item removed from cart");
}

function getCartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";

  const isEmpty = cart.length === 0;
  cartEmpty.classList.toggle("visible", isEmpty);
  cartFooter.classList.toggle("hidden", isEmpty);
  cartItemsEl.classList.toggle("hidden", isEmpty);

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <a href="${item.buyUrl}" target="_blank" rel="noopener noreferrer" class="cart-item-link">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">${item.price}</span>
          <span class="cart-item-store">
            <i class="fa-solid fa-external-link"></i> View on ${item.store}
          </span>
        </div>
      </a>
      <div class="cart-item-actions">
        <span class="cart-item-qty">×${item.qty}</span>
        <button type="button" class="cart-remove" data-id="${item.id}" aria-label="Remove ${item.name}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    cartItemsEl.appendChild(li);
  });

  cartTotalItems.textContent = getCartItemCount();
  cartCount.textContent = getCartItemCount();
}

function updateCartUI() {
  renderCartItems();
}

function renderProducts(items) {
  productGrid.innerHTML = "";

  if (items.length === 0) {
    productGrid.innerHTML =
      '<p class="no-results">No products found. Try a different search.</p>';
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <a href="${product.buyUrl}" target="_blank" rel="noopener noreferrer" class="product-image-link" title="Search ${product.name} on ${product.store}">
        <img src="${product.image}" alt="${product.name}">
        <span class="store-badge store-${product.store.toLowerCase()}">${product.store}</span>
      </a>
      <div class="product-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="price">${product.price}</span>
        <div class="product-actions">
          <a href="${product.buyUrl}" target="_blank" rel="noopener noreferrer" class="view-btn view-${product.store.toLowerCase()}">
            <i class="fa-solid fa-external-link"></i> ${product.store}
          </a>
          <button type="button" class="add-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function filterProducts() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);
    const matchCategory =
      category === "all" || product.category === category;
    return matchSearch && matchCategory;
  });

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

productGrid.addEventListener("click", (event) => {
  const addBtn = event.target.closest(".add-btn");
  if (addBtn) {
    event.preventDefault();
    addToCart(addBtn.dataset.id);
  }
});

cartItemsEl.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".cart-remove");
  if (removeBtn) {
    event.preventDefault();
    event.stopPropagation();
    removeFromCart(Number(removeBtn.dataset.id));
  }
});

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

shopBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Message sent! We will reply soon.");
    form.reset();
  });
});

renderProducts(products);
updateCartUI();

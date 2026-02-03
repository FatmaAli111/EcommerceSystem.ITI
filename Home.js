const products = [
  // Category 1: Audio & Headphones
  { id: 1, title: "Wireless Headphones", subTitle: "Noise Cancelling", price: 99, image: "Images/headphone.jpeg", category: "Audio" },
  { id: 2, title: "Bluetooth Speaker", subTitle: "Portable Bass", price: 79, image: "Images/speaker.jpeg", category: "Audio" },
  { id: 3, title: "Noise Cancelling Mic", subTitle: "Studio Quality", price: 99, image: "Images/mic.jpg", category: "Audio" },
  { id: 4, title: "Gaming Headset", subTitle: "Surround Sound", price: 129, image: "Images/headset.jpg", category: "Audio" },
  { id: 5, title: "Mechanical Keyboard", subTitle: "Blue Switches", price: 89, image: "Images/keyboard.jpeg", category: "Audio" },
  { id: 6, title: "WireLess Mouse", subTitle: "Red Switches", price: 89, image: "Images/WireLessMouse.jpeg", category: "Audio" },
  { id: 7, title: "Mouse Pad XL", subTitle: "RGB Lighting", price: 29, image: "Images/mousepad.jpeg", category: "Audio" },
  { id: 8, title: "Gaming Mouse", subTitle: "RGB Optical", price: 49, image: "Images/mouse.jpeg", category: "Audio" },
  { id: 9, title: "Portable Projector", subTitle: "HD Mini", price: 249, image: "Images/projector.jpeg", category: "Audio" },
  { id: 10, title: "VR Headset", subTitle: "Immersive Experience", price: 299, image: "Images/vr.jpeg", category: "Audio" },

  // Category 2: Computers & Accessories
  { id: 11, title: "Laptop", subTitle: "Core-i5 Processor", price: 899, image: "Images/laptop.jpeg", category: "Computers" },
  { id: 12, title: "Monitor", subTitle: "27-inch Full HD", price: 179, image: "Images/monitor1.jpeg", category: "Computers" },
  { id: 13, title: "Monitor Stand", subTitle: "Adjustable", price: 49, image: "Images/stand2.jpeg", category: "Computers" },
  { id: 14, title: "USB-C Hub", subTitle: "6 in 1 Adapter", price: 39, image: "Images/hub1.jpeg", category: "Computers" },
  { id: 15, title: "External SSD", subTitle: "1TB Fast Storage", price: 129, image: "Images/ssd.jpg", category: "Computers" },
  { id: 16, title: "Webcam", subTitle: "1080p HD", price: 59, image: "Images/webcam.jpg", category: "Computers" },
  { id: 17, title: "Graphic Tablet", subTitle: "Pen Included", price: 129, image: "Images/tablet2.jpeg", category: "Computers" },
  { id: 18, title: "Smartphone", subTitle: "64GB Storage", price: 699, image: "Images/phone1.jpeg", category: "Computers" },
  { id: 19, title: "Tablet", subTitle: "10-inch Display", price: 399, image: "Images/tablet1.jpeg", category: "Computers" },
  { id: 20, title: "Gamepad", subTitle: "Wireless Controller", price: 59, image: "Images/gamepad1.jpeg", category: "Computers" },

  // Category 3: Smart Home & Gadgets
  { id: 21, title: "Smart Watch", subTitle: "Heart Rate Monitor", price: 149, image: "Images/watch.jpeg", category: "Smart Home" },
  { id: 22, title: "Smart Light Bulb", subTitle: "Color Changing", price: 19, image: "Images/bulb1.jpeg", category: "Smart Home" },
  { id: 23, title: "Smart Plug", subTitle: "WiFi Outlet", price: 19, image: "Images/plug1.jpeg", category: "Smart Home" },
  { id: 24, title: "Smart Thermostat", subTitle: "WiFi Enabled", price: 129, image: "Images/thermostat1.jpeg", category: "Smart Home" },
  { id: 25, title: "Smart Lock", subTitle: "Keyless Entry", price: 149, image: "Images/lock1.jpeg", category: "Smart Home" },
  { id: 26, title: "Security Camera", subTitle: "1080p WiFi", price: 79, image: "Images/security1.jpeg", category: "Smart Home" },
  { id: 27, title: "Robot Vacuum", subTitle: "Auto Cleaning", price: 229, image: "Images/vacuum1.jpeg", category: "Smart Home" },
  { id: 28, title: "Wireless Charger", subTitle: "Fast Charging", price: 25, image: "Images/charger1.jpeg", category: "Smart Home" },
  { id: 29, title: "Electric Scooter", subTitle: "20mph Max", price: 399, image: "Images/scooter1.jpeg", category: "Smart Home" },
  { id: 30, title: "Fitness Tracker", subTitle: "Step Counter", price: 49, image: "Images/tracker1.jpeg", category: "Smart Home" },

  // Category 4: Gaming Gear
  { id: 31, title: "Gaming Console", subTitle: "Next Gen", price: 499, image: "Images/console1.jpeg", category: "Gaming" },
  { id: 32, title: "VR Controller", subTitle: "Motion Tracking", price: 99, image: "Images/vrcontroller1.jpeg", category: "Gaming" },
  { id: 33, title: "Racing Wheel", subTitle: "Sim Racing", price: 199, image: "Images/wheel1.jpg", category: "Gaming" },
  { id: 34, title: "Gaming Chair", subTitle: "Ergonomic", price: 199, image: "Images/chair1.jpeg", category: "Gaming" },
  { id: 35, title: "Gaming Desk", subTitle: "LED Lighting", price: 299, image: "Images/desk1.jpg", category: "Gaming" },
  { id: 36, title: "Laptop Stand", subTitle: "Aluminum Adjustable", price: 35, image: "Images/stand.jpeg", category: "Gaming" },
  { id: 37, title: "Mouse Pad XL", subTitle: "RGB Lighting", price: 29, image: "Images/mousepad.jpeg", category: "Gaming" },
  { id: 38, title: "Action Camera", subTitle: "Waterproof", price: 199, image: "Images/camera1.jpeg", category: "Gaming" },
  { id: 39, title: "Drone", subTitle: "4K Camera", price: 499, image: "Images/Drone.png", category: "Gaming" },
  { id: 40, title: "Smart Scale", subTitle: "Body Metrics", price: 39, image: "Images/scale1.jpeg", category: "Gaming" },

  // Category 5: Home & Lifestyle
  { id: 41, title: "Desk Lamp", subTitle: "LED Adjustable", price: 35, image: "Images/lamps1.jpg", category: "Home" },
  { id: 42, title: "Air Purifier", subTitle: "HEPA Filter", price: 129, image: "Images/purifier1.jpeg", category: "Home" },
  { id: 43, title: "Coffee Maker", subTitle: "Automatic", price: 79, image: "Images/coffee1.jpeg", category: "Home" },
  { id: 44, title: "Blender", subTitle: "Smoothies", price: 49, image: "Images/blender1.jpeg", category: "Home" },
  { id: 45, title: "Electric Kettle", subTitle: "Fast Boil", price: 29, image: "Images/kettle1.jpeg", category: "Home" },
  { id: 46, title: "Hair Dryer", subTitle: "Ionic Technology", price: 49, image: "Images/hairdryer1.jpeg", category: "Home" },
  { id: 47, title: "Electric Toothbrush", subTitle: "Rechargeable", price: 59, image: "Images/toothbrush1.jpg", category: "Home" },
  { id: 48, title: "Water Bottle Smart", subTitle: "Tracks Hydration", price: 25, image: "Images/bottle1.jpeg", category: "Home" },
  { id: 49, title: "Mat", subTitle: "Non-Slip", price: 35, image: "Images/mat1.jpeg", category: "Home" },
  { id: 50, title: "E-Reader", subTitle: "6-inch Display", price: 89, image: "Images/ereader1.jpeg", category: "Home" }
];

const container = document.getElementById("products");

// =======================
// CART
// =======================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  alert(`${product.title} added to cart 🛒`);
}

// =======================
// WISHLIST
// =======================
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToWishlist(product) {
  const exists = wishlist.some(item => item.id === product.id);
  if (exists) {
    alert("Already in wishlist 🤍");
    return;
  }
  wishlist.push(product);
  saveWishlist();
  alert(`${product.title} added to wishlist 🤍`);
}

// =======================
// FILTER BY CATEGORY
// =======================
function filterByCategory(category) {
  if (category === "All") renderProducts(products);
  else renderProducts(products.filter(p => p.category === category));
}

// =======================
// RENDER PRODUCTS
// =======================
function renderProducts(list) {
  container.innerHTML = ""; // Clear container before rendering
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card p-2 m-2";
    card.style.width = "18rem";

    card.innerHTML = `
      <img src="${product.image}" class="card-img-top" height="160">
      <div class="card-body text-center">
        <h5 class="card-title">
          <a href="product.html?id=${product.id}" class="text-decoration-none">
            ${product.title}
          </a>
        </h5>
        <p class="card-text">${product.subTitle}</p>
        <p class="text-primary">$${product.price}</p>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-primary btn-sm">Add to Cart</button>
          <button class="btn btn-outline-danger btn-sm">🤍 Wishlist</button>
        </div>
      </div>
    `;

    const [cartBtn, wishBtn] = card.querySelectorAll("button");
    cartBtn.onclick = () => addToCart(product);
    wishBtn.onclick = () => addToWishlist(product);

    container.appendChild(card);
  });
}

// =======================
// INITIAL RENDER
// =======================
renderProducts(products);

// =======================
// CATEGORY DROPDOWN / BUTTONS
// =======================
document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const category = item.dataset.category;
    filterByCategory(category);
  });
});

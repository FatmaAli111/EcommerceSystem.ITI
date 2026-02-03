// const container = document.getElementById("products");
document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("full-div");
  const emptyDiv = document.getElementById("empty-div");
  const clearCartBtn = document.getElementById("clearCart");

  const subTotalEl = document.getElementById("subTotal");
  const shippingEl = document.getElementById("EstimatedShipping");
  const taxEl = document.getElementById("EstimatedTax");

  const discountForm = document.querySelector('form[role="apply-discount"]');
  const discountInput = document.getElementById("discount-code");

  const SHIPPING_RATE = 10;
  const TAX_RATE = 0.08;
  let discount = 0;

function loadProducts() {
  const stored = localStorage.getItem("products");
  return stored ? JSON.parse(stored) : [...products];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}



// Cart

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const templateRow = cartContainer.querySelector(".row");
  cartContainer.innerHTML = "";

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function toggleEmptyState() {
    if (cart.length === 0) {
      cartContainer.style.display = "none";
      emptyDiv.style.display = "flex";
    } else {
      cartContainer.style.display = "block";
      emptyDiv.style.setProperty("display" ,"none", "important");
    }
  }

  function calculateTotals() {
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    let shipping = cart.length ? SHIPPING_RATE : 0;
    let tax = subtotal * TAX_RATE;
    let total = subtotal + shipping + tax - discount;

    subTotalEl.textContent = `$${subtotal.toFixed(2)}`;
    shippingEl.textContent = `$${shipping.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    document.querySelectorAll("#EstimatedTax")[1].textContent =
      `$${total.toFixed(2)}`;
  }

//   Render The Cart

  function renderCart() {
    
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
      const row = templateRow.cloneNode(true);

      // row.querySelector("#item-img").src=item-img;
      row.querySelector("#item-img img").src = item.image;
      row.querySelector("#item-img img").alt = item.title;
      row.querySelector("#item-title").textContent = item.title;
      row.querySelector("#item-subTitle").textContent = item.subTitle;
      row.querySelector("#item-price").textContent = `$${item.price.toFixed(2)}`;
      row.querySelector("#qty").value = item.qty;
      row.querySelector("#subTotalPrice").textContent =
        `$${(item.price * item.qty).toFixed(2)}`;

      row.querySelector("#btn-plus").onclick = () => {
        item.qty++;
        saveCart();
        renderCart();
      };

      row.querySelector("#btn-minus").onclick = () => {
        if (item.qty > 1) item.qty--;
        saveCart();
        renderCart();
      };

      row.querySelector("#deleteProduct").onclick = () => {
        cart.splice(index, 1);
        saveCart();
        renderCart();
      };

      cartContainer.appendChild(row);
    });

    toggleEmptyState();
    calculateTotals();
  }

//  Add Product

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
  }

 

 //Discount

  discountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = discountInput.value.trim().toUpperCase();

    if (code === "SAVE10") discount = 10;
    else if (code === "SAVE20") discount = 20;
    else discount = 0;

    calculateTotals();
  });

  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    cart = [];
    discount = 0;
    saveCart();
    renderCart();
  });

//  Init

  renderCart();
});

let dashboardCart = JSON.parse(localStorage.getItem("dashboard")) || [];
function saveDashboardCart() {
  localStorage.setItem("dashboard", JSON.stringify(dashboardCart));
}

function addToDashboardCart(products) {
 dashboardCart.push(products );
  saveDashboardCart();
  alert(`${product.title} added to dashboard cart 🛒`);
}

const submitOrderBtn = document.getElementById("submit-order");
if (submitOrderBtn) {
    submitOrderBtn.onclick = () => addToDashboardCart(products);
}
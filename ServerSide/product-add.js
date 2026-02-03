// ===========================
// Add New Product JS
// ===========================

// Grab all form elements
const imageInput = document.getElementById("formFileLg");
const titleInput = document.getElementById("title");
const subTitleInput = document.getElementById("subTitle");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const submitBtn = document.getElementById("submitBtn");
function loadProducts() {
  const stored = localStorage.getItem("products");
  return stored ? JSON.parse(stored) : [...defaultProducts];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}


// Load existing products
let products = loadProducts();

// Handle submit
submitBtn.addEventListener("click", e => {
  e.preventDefault();

  // Basic validation
  if (!imageInput.files.length) return alert("Please upload a product image!");
  if (!titleInput.value.trim()) return alert("Please enter product title!");
  if (!subTitleInput.value.trim()) return alert("Please enter product subtitle!");
  if (!categoryInput.value.trim()) return alert("Please enter product category!");
  if (!priceInput.value || priceInput.value <= 0) return alert("Please enter a valid price!");
  if (!descriptionInput.value.trim()) return alert("Please enter product description!");

  // Read the image file as Data URL
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const imageData = reader.result;

    // Create new product object
    const newProduct = {
      id: Date.now(),               // unique ID
      title: titleInput.value.trim(),
      subTitle: subTitleInput.value.trim(),
      category: categoryInput.value.trim(),
      price: parseFloat(priceInput.value),
      description: descriptionInput.value.trim(),
      image: imageData
    };

    // Add to products array
    products.push(newProduct);
    saveProducts(products);


    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Feedback
    alert(`${newProduct.title} added successfully!`);

    // Reset form
    imageInput.value = "";
    titleInput.value = "";
    subTitleInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
  };

window.open("ProductsManagement.html", "_self");
  reader.readAsDataURL(file);   

});

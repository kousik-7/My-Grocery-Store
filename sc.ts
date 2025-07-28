const products = [
  { id: 1, name: "🍎 Apples", price: 2.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "🥛 Milk", price: 1.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "🥦 Broccoli", price: 1.49, image: "https://via.placeholder.com/150" }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
    alert(`${product.name} added to cart!`);
  } else {
    alert("Product not found!");
  }
}

document.addEventListener("DOMContentLoaded", displayProducts);

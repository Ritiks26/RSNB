import { products } from "../data/products.js";
import { cart, addToCart } from "../data/cart.js";

let productHTML = "";

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-counts").innerHTML = cartQuantity;
}

updateCartQuantity();

products.forEach((product) => {
  productHTML += `
  <div class="product-container">
    <div class="image-wrapper">
      <img class="products-image" src="${product.image}">
      <button class="add-cart-button js-add-to-cart-button"
      data-product-id='${product.id}'>Add to Cart</button>
    </div>

    <div class="product-content">
      <p>
       ${product.name}
      </p>
      <p><strong>
        ${product.color}
      </strong></p>
      <p>
        Rs. ${product.priceRupees}
      </p>
    </div>
  </div>
  `;
});

document.querySelector(".js-products-parent-container").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  });
});

const searchBar = document.querySelector(".js-search-bar");
searchBar.addEventListener("click", () => {
  searchBar.classList.add("js-searchbar-input");
  hideMenu();

  searchBar.addEventListener("blur", () => {
    searchBar.classList.remove("js-searchbar-input");
    showMenu();
  });
});

function hideMenu() {
  const listsElem = document.querySelector(".js-nav");
  listsElem.style.display = "none";
}

function showMenu() {
  const listsElem = document.querySelector(".js-nav");
  listsElem.style.display = "block";
}

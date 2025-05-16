import { cart, removeFromCart, showDeletePopup } from "../data/cart.js";
import { products, getProduct } from "../data/products.js";
import formatCurrency from "../utils/money.js";
import { saveToStorage } from "../data/cart.js";

function renderCheckoutPage() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    cartSummaryHTML += `
    <div class="cart-summary js-cart-summary-${matchingProduct.id}">
      <img class="cart-products-image"
        src="${matchingProduct.image}">

      <div class="cart-products-content">
        <p class="cart-product-name">
          ${matchingProduct.name}
        </p>

        <p>
          Quantity: ${cartItem.quantity} | ${matchingProduct.color}
        </p>

        <p>
          Rs.${matchingProduct.priceRupees}
        </p>

        <p class="cart-delete-link js-cart-delete-link"
        data-product-id="${matchingProduct.id}">
          Remove
        </p>
      </div>

    </div>
  `;
  });

  document.querySelector(".js-cart-container").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js-cart-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      showDeletePopup(productId);
      const container = document.querySelector(`.js-cart-summary-${productId}`);
      const warningBox = document.querySelector(".confirmation-box");
      const acceptButton = document.querySelector(".js-accept-button");
      const declineButton = document.querySelector(".js-decline-button");
      warningBox.style.display = "block";
      acceptButton.addEventListener("click", () => {
        removeFromCart(productId);
        container.remove();
        warningBox.style.display = "none";
        saveToStorage();
        renderCheckoutPage();
      });
      declineButton.addEventListener("click", () => {
        warningBox.style.display = "none";
      });
    });
  });

  // billing code here

  function renderPaymentSummary() {
    let productPriceRupees = 0;

    cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);
      productPriceRupees += product.priceRupees * cartItem.quantity;
    });

    const discountReceived = 0;
    const taxCalculation = productPriceRupees * 0.12;
    const finalCost = taxCalculation + productPriceRupees;

    const paymentSummaryHTML = `
    <h3>Summary</h3>

    <hr />
      <div class="price-calculation">
        <div class="item-cost">
          <div>Total (${cartCount()} Items) :</div>
          <div>Rs. ${formatCurrency(productPriceRupees)}</div>
        </div>

        <div class="calculate-discount">
          <div>
            Discount (%) :
            <p class="coupon-link js-coupon-link">apply coupon</p>
          </div>
          <div>Rs. (${formatCurrency(discountReceived)})</div>
        </div>

        <div class="calculate-tax">
          <div>Tax (12%) :</div>
          <div>Rs. ${formatCurrency(taxCalculation)}</div>
        </div>

        <hr />

        <div class="final-total-cost">
          <div>Total :</div>
          <div>Rs. ${formatCurrency(finalCost)}</div>
        </div>

        <hr />

        <div class="checkout-button">
          <button>checkout</button>
        </div>
      </div>
    `;

    function cartCount() {
      let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      return cartQuantity;
    }

    document.querySelector(".js-payment-container").innerHTML =
      paymentSummaryHTML;

    const couponLink = document.querySelector(".js-coupon-link");
    const couponAvailable = document.querySelector(".coupon-code-link");
    couponLink.addEventListener("click", () => {
      couponAvailable.classList.add("coupon-code-link-visible");

      setTimeout(() => {
        couponAvailable.classList.remove("coupon-code-link-visible");
      }, 3000);
    });
  }

  renderPaymentSummary();

  function updateCartQuantity() {
    let cartQuantityHTML = "";
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    cartQuantityHTML += `
    <h2>Your Cart: (${cartQuantity}) Items</h2>
    `;

    document.querySelector(".js-checkout-cart-count").innerHTML =
      cartQuantityHTML;
  }

  updateCartQuantity();
}

renderCheckoutPage();

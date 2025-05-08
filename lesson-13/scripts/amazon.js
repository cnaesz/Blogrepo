import {cart, addTocart} from '../data/cart.js';
import {products} from '../data/products.js'


let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-a-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

let timeoutId;

function handleClick() {
    const productId = this.dataset.productId;
    // Clear any existing timeout
    clearTimeout(timeoutId);
    const addedMsg = document.querySelector(`.js-added-a-${productId}`);
    // Add the class
    addedMsg.classList.add('js-added2');

    // Start a new timeout
    timeoutId = setTimeout(() => {
        addedMsg.classList.remove('js-added2');
    }, 3000);
  }

// Example: Attach the function to a button click
 const elements = document.querySelectorAll('.js-add-to-cart');

elements.forEach((button) => {
  button.addEventListener("click", handleClick);
  });





function updateCart(){
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }


elements.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addTocart(productId);
    updateCart();

      console.log(cart);
     });
  });


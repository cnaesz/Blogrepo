import { cart, removeCartitem, updateQ } from '../data/cart.js';
import { products } from '../data/products.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../data/deliveryOption.js';
import { currencyFix } from '../data/currencyFix.js';




function renderCart() {
  let cartHtml = '';

  let cartQuantity = 0;
  
  

  function getDeliveryDateString(deliveryOptionId) {
    
    
    const option = deliveryOptions.find((opt) => opt.id === deliveryOptionId);
    if (!option) return 'Unknown date';

    const today = dayjs();
    const deliveryDate = today.add(option.deliveryDays, 'days');
    return deliveryDate.format('dddd, MMMM D');
  }


  cart.forEach(cartItem => {
    const productId = cartItem.id || cartItem.productId;
    const deliveryOptionId = cartItem.deliveryOptionId;
    cartQuantity += cartItem.quantity;

      const dateString = getDeliveryDateString(deliveryOptionId);



    const matchingProduct = products.find(product => product.id === productId);
    if (matchingProduct) {
      
      cartHtml += `
        <div class="cart-item-container-${matchingProduct.id}">
          <div class="delivery-date">
            Delivery date: ${dateString}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}">
            <div class="cart-item-details">
              <div class="product-name">${matchingProduct.name}</div>
              <div class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <div class="cart-item">
                  <span class="js-update-cart link-primary" data-product-id="${matchingProduct.id}">Update</span>
                  <input class="js-input " data-product-id="${matchingProduct.id}">
                  <span class="js-save-quantity link-primary" data-product-id="${matchingProduct.id}">Save</span>
              </div>

                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
              </div>
            </div>
            <div class="delivery-options">
              <div class="delivery-options-title">Choose a delivery option:
              </div>
              ${deliveryOptionHTML(matchingProduct, cartItem)}
            </div>
          </div>
        </div>
      `;
    }
  });

  
  

  function deliveryOptionHTML (matchingProduct, cartItem){
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {

      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const dateString = deliveryDate.format('dddd, MMMM D');

      const priceString = deliveryOption.priceCents === 0 
      ? 'FREE'
      : `$${currencyFix(deliveryOption.priceCents)} Shipping`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId
      
       html +=`
            <div class="delivery-option">
                <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">${dateString}</div>
                    <div class="delivery-option-price">${priceString}</div>
                  </div>
            </div>
              

        `
      
     });

     return html;
  }
  document.querySelector('.order-summary').innerHTML = cartHtml;
  document.querySelector('.js-cart-quantity').innerHTML = `${cartQuantity} items`;
  




    
  document.querySelectorAll('.js-delete-link').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeCartitem(productId);
      renderCart(); // دوباره رندر کن بعد از حذف
    });
  });

  // create update button interactive

  document.querySelectorAll('.js-update-cart').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      console.log(productId);
      
      const container = link.parentElement; // یا link.closest('.cart-item') اگه کلاس‌گذاری مشخص‌تری داری
      const input = container.querySelector('.js-input');
      const update = container.querySelector('.js-update-cart');
      const saveQuan = container.querySelector('.js-save-quantity');
      
      update.classList.add('is-edt');
      input.classList.add('is-editing');
      saveQuan.classList.add('is-editing');
    });
  });
  


    //create Save button disapear after registering input

    document.querySelectorAll('.js-save-quantity').forEach(link => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
    
        document.querySelector('.js-update-cart').classList.remove('is-edt');
    
        const input = document.querySelector(`.js-input[data-product-id="${productId}"]`);
    
        input.classList.remove('is-editing');
        link.classList.remove('is-editing');
    
        const newQ = Number(input.value);
        if (isNaN(newQ) || newQ <= 0) {
          alert('Please enter a valid quantity.');
          return;
        }

        updateQ(productId, newQ);
        renderCart();
      });
    });
    
    

   };




// اجرای اولیه
renderCart();

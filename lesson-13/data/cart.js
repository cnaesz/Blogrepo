export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [{
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
  }]
}
function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addTocart(productId){
  let matchingItem;

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySelector.value);
  

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if (matchingItem){
    matchingItem.quantity += quantity;

  } else{
      cart.push({
        productId : productId,
        quantity : quantity,
    });
  }
  saveCart();
};

/*
export function removeCartitem(productId){
  let newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  
  cart = newCart;
  console.log("Trying to remove productId:", productId);
}

  */
export function removeCartitem(productId) {
  const index = cart.findIndex(item => item.productId === productId || item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1); // تغییر درجا (in-place) روی آرایه‌ی اصلی
  }
  saveCart();
}


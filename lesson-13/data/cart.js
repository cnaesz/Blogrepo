
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [  {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ],
      quantity: 1,
      deliveryOptionId: '1',
    },
    {
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
      ],
      quantity: 1,
      deliveryOptionId: '2'
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
        deliveryOptionId : '1',
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
    cart.splice(index, 1);
  }
  saveCart();
}

export function updateQ(productId, newQ){

  cart.forEach((cartItem) =>{
    if(cartItem.productId === productId){
      cartItem.quantity = newQ;
      
    }
  });
  saveCart();

}

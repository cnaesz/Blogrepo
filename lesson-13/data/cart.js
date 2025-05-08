export const cart = [];

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
}
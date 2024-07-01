export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { product, quantity }
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId
  });
  
  export const updateQuantity = (productId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, newQuantity }
  });
// add to cart
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_CART = "UPDATE_CART ";
const DELETE_FROM_CART = "DELETE_FROM_CART ";
export function addToCart(product, quantity, unitCost) {
  return {
      type: ADD_TO_CART,
      payload: { product, quantity, unitCost }
  };
}
export function updateCart(product, quantity, unitCost){
    return {
      type: UPDATE_CART,
      payload: {
        product,
        quantity,
        unitCost
      }
    };
}
export function deleteFromCart(product, quantity, unitCost) {
         return {
           type: DELETE_FROM_CART,
           payload: {
             product
           }
         };
       }
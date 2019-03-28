
import * as actions from "./actions/cart-actions";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
const App = <h1>Redux Shopping Cart</h1>;
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.addToCart("Coffee 500gm", 1, 250));
store.dispatch(actions.addToCart("Flour 1kg", 2, 110));
store.dispatch(actions.addToCart("Juice 2L", 1, 250));
// Update Cart
store.dispatch(actions.updateCart("Flour 1kg", 10, 110));
// Delete from Cart
// store.dispatch(actions.deleteFromCart("Coffee 500gm"));
unsubscribe();
ReactDOM.render(
  <Provider store={store}>{App}</Provider>,
  document.getElementById("root")
);









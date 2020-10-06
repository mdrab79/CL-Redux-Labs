import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import ShoppingList from "../containers/ShoppingList";

const ShoppingApp = () => (
  <Provider store={store}>
    <ShoppingList />
  </Provider>
);

export default ShoppingApp;

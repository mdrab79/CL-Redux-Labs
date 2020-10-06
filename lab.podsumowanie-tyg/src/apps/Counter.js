import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Counter from "../containers/Counter";

const CounterApp = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default CounterApp;

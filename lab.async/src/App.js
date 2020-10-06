import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Quote from "./containers/Quote";
import Favourites from "./containers/Favourites";

const App = () => (
  <Provider store={store}>
    <Quote />
    <Favourites />
  </Provider>
);

export default App;

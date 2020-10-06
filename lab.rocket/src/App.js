import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Platform from "./containers/Platform"

const App = () => (
  <div className="root">
    <Provider store={ store } >
      <Platform />
    </Provider>
  </div>
);

export default App;

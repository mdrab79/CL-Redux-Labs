import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Articles from "../containers/Articles";

const ArticlesApp = () => (
  <Provider store={store}>
    <Articles />
  </Provider>
);

export default ArticlesApp;

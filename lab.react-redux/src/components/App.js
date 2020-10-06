import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import UserInput from "../containers/UserInput";
import Articles from "../containers/Articles";

const App = () => (
  <div>
    <Provider store={store}>
      <UserInput />
      <Articles />
    </Provider>
  </div>
);

export default App;

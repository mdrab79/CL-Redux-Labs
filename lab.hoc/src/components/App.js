// Tego pliku nie trzeba modyfikować
// Pamietaj aby zaimplementować wszystkie niezbędne elementy np. store, Articles i StopperWithTimer

import React from "react";
import store from "../redux/store";

import Articles from "./Articles";
import { StopperWithTimer } from "./Stopper";

const App = () => (
  <div>
    <StopperWithTimer>czas start</StopperWithTimer>
    <hr/>
    <Articles store={store} />
  </div>
);

export default App;

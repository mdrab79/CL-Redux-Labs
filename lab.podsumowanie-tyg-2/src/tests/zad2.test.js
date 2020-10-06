import React from "react";
import {render, cleanup} from "react-testing-library";

import App from "../components/App";

describe("Zadanie 2", () => {

  afterEach(cleanup);

  it("counter works as expected", () => {
    window.location.hash = "#/5";
    jest.useFakeTimers();

    const {getByText, container} = render(<App/>);

    expect(container.querySelector("h1").innerHTML).toEqual("5");

    getByText("start").click();

    jest.runOnlyPendingTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("6");

    getByText("stop").click();

    jest.runAllTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("6");
  });
});

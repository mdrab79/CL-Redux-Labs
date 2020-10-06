import React from "react";
import {render, cleanup} from "react-testing-library";

import App from "../components/App";

describe("Zadanie 1", () => {

  afterEach(cleanup);

  it("counter works as expected", () => {
    jest.useFakeTimers();

    const { getByText, container } = render(<App/>);

    expect(container.querySelector("h1").innerHTML).toEqual("0");
    expect(getByText("start").hasAttribute("disabled")).toEqual(false);
    expect(getByText("stop").hasAttribute("disabled")).toEqual(true);

    getByText("start").click();

    jest.runOnlyPendingTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("1");
    expect(getByText("start").hasAttribute("disabled")).toEqual(true);
    expect(getByText("stop").hasAttribute("disabled")).toEqual(false);

    getByText("zapisz").click();

    jest.runOnlyPendingTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("2");

    jest.runOnlyPendingTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("3");

    getByText("zapisz").click();
    getByText("zapisz").click();

    getByText("stop").click();

    const expectedValues = ["1", "3", "3"];
    container.querySelectorAll("li").forEach((el, index) => {
      expect(el.innerHTML).toEqual(expectedValues[index]);
    });

    jest.runAllTimers();
    expect(container.querySelector("h1").innerHTML).toEqual("3");

    container.querySelector("li").click();

    const expectedRemainingValues = ["3", "3"];
    container.querySelectorAll("li").forEach((el, index) => {
      expect(el.innerHTML).toEqual(expectedRemainingValues[index]);
    });
  });
});

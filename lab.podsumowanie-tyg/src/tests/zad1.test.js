import React from "react";
import {render, cleanup} from "react-testing-library";
import reducer from "../redux/reducers";
import Counter from "../apps/Counter";
import {decrement, increment} from "../redux/actions";

describe("Zadanie 1", () => {

  afterEach(cleanup);

  describe("reducer", () => {

    it("should have initial state", () => {
      expect(reducer(undefined, {}).counter).toEqual(0);
    });

    it("should increment counter", () => {
      expect(reducer(undefined, increment()).counter).toEqual(1);
    });

    it("should decrement counter", () => {
      expect(reducer({ counter: 5 }, decrement()).counter).toEqual(4);
    });

  });

  describe("Counter App", () => {

    it("should display counter value", () => {
      const { container } = render(<Counter/>);

      expect(container.querySelector("h1").innerHTML).toEqual("0");
    });

    it("should increment value after click on +", () => {
      const { container, getByText } = render(<Counter/>);

      getByText("+").click();
      getByText("+").click();

      expect(container.querySelector("h1").innerHTML).toEqual("2");
    });

    it("should decrement value after click on -", () => {
      const { container, getByText } = render(<Counter/>);

      getByText("-").click();
      getByText("-").click();

      expect(container.querySelector("h1").innerHTML).toEqual("-2");
    });
  })
});

import React from "react";
import {render, cleanup, fireEvent} from "react-testing-library";

import App from "../App";

describe("Shopping cart", () => {

  afterEach(cleanup);

  function addProduct(form, product) {
    fireEvent.submit(form, {
      target: {
        productName: {
          value: product.name
        },
        price: {
          value: product.price
        }
      }
    });
  }

  it("should display nav links", () => {
    const { getByText } = render(<App />);

    expect(getByText("wszystkie")).not.toBe(null);
    expect(getByText("do 10zł")).not.toBe(null);
    expect(getByText("do 50zł")).not.toBe(null);
    expect(getByText("do 100zł")).not.toBe(null);
  });

  it("should display form to add product", () => {
    const { container, getAllByText, getByText } = render(<App />);

    const form = container.querySelector("form");

    [{
      name: "jajka",
      price: 10
    }, {
      name: "chleb",
      price: 20
    }].forEach((product) => addProduct(form, product));

    expect(getByText("jajka - 10 PLN")).not.toBe(null);
    expect(getByText("chleb - 20 PLN")).not.toBe(null);
    expect(getAllByText("Usuń").length).toEqual(2);
  });

  it("should remove item from list and calculate summary value", () => {
    const { container, getAllByText, getByText } = render(<App />);

    const form = container.querySelector("form");

    [{
      name: "jajka",
      price: 10
    }, {
      name: "chleb",
      price: 20
    }].forEach((product) => addProduct(form, product));

    expect(getByText("Do zapłaty: 30 PLN")).not.toBe(null);

    getAllByText("Usuń")[0].click();

    expect(getByText("Do zapłaty: 20 PLN")).not.toBe(null);

    getAllByText("Usuń")[0].click();

    expect(getByText("Do zapłaty: 0 PLN")).not.toBe(null);
  });

  it("should filter list", () => {
    const { container, queryByText, getByText } = render(<App />);

    const form = container.querySelector("form");

    [{
      name: "jajka",
      price: 10
    }, {
      name: "chleb",
      price: 51
    }].forEach((product) => addProduct(form, product));

    getByText("do 10zł").click();

    expect(queryByText("jajka - 10 PLN")).not.toBe(null);
    expect(queryByText("chleb - 51 PLN")).toBe(null);
  });

});

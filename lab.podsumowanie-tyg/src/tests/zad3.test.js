import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import ShoppingApp from "../apps/ShoppingList";

describe("Zad 3 - app", () => {

  afterEach(cleanup);

  const products = ["jajka", "chleb"];

  it("adds products to the list", () => {
    const { container, getByText } = render(<ShoppingApp/>);
    const input = container.querySelector("input");

    products.forEach((product) => {
      fireEvent.change(input, {
        target: {
          value: product
        }
      });

      getByText("Dodaj produkt").click();
    });

    container.querySelectorAll("li").forEach((el, index) => {
      expect(el.innerHTML).toContain(products[index]);
    })
  });

  it("change order of products up", () => {
    const { container, getByText, getAllByText } = render(<ShoppingApp/>);
    const input = container.querySelector("input");

    products.forEach((product) => {
      fireEvent.change(input, {
        target: {
          value: product
        }
      });

      getByText("Dodaj produkt").click();
    });

    getAllByText("up")[1].click();

    const reversed = products.reverse();

    container.querySelectorAll("li").forEach((el, index) => {
      expect(el.innerHTML).toContain(reversed[index]);
    })
  });

  it("change order of products down", () => {
    const { container, getByText, getAllByText } = render(<ShoppingApp/>);
    const input = container.querySelector("input");

    products.forEach((product) => {
      fireEvent.change(input, {
        target: {
          value: product
        }
      });

      getByText("Dodaj produkt").click();
    });

    getAllByText("down")[0].click();

    const reversed = products.reverse();

    container.querySelectorAll("li").forEach((el, index) => {
      expect(el.innerHTML).toContain(reversed[index]);
    })
  });
});

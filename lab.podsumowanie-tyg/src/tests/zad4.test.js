import React from "react";
import {render,cleanup} from "react-testing-library";
import Main from "../apps/Main";

describe("Zadanie 4", () => {

  afterEach(cleanup);

  it("renders 404 component", () => {
    window.location.hash = "#/nieznany";

    const { getByText } = render(<Main/>);

    expect(getByText("Nie znaleziono strony")).not.toBe(null);
  });

  it("renders Hello component", () => {
    window.location.hash = "#/";

    const { getByText } = render(<Main/>);

    expect(getByText("Witaj! Wybierz aplikację")).not.toBe(null);
  });

  it("renders Counter app after click on Counter link", () => {
    const { getByText } = render(<Main/>);

    getByText("Counter").click();

    expect(getByText("0")).not.toBe(null);
  });

  it("renders Articles app after click on Articles link", () => {
    const { getByText } = render(<Main/>);

    getByText("Articles").click();

    expect(getByText("Pierwsze kroki z reduxem")).not.toBe(null);
  });

  it("renders ShoppingList app after click on Shopping List link", () => {
    const { getByText } = render(<Main/>);

    getByText("Shopping List").click();

    expect(getByText("Dodaj produkt")).not.toBe(null);
  });
});

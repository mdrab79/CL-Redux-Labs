import React from "react";
import {render, cleanup} from "react-testing-library";

import api from "../api"
import App from "../App";

jest.mock("../api");

describe("Zadanie 2 - middleware", () => {

  afterEach(cleanup);

  it("renders quote and adds it to favourites", () => {
    const quote = { quote: "cytat", author: "author" };
    api.fetchQuote.mockImplementation(() => Promise.resolve(quote));

    const { getByText, container } = render(<App />);

    getByText("Pobierz cytat").click();

    return Promise.resolve().then(() => {

      expect(getByText("cytat / author")).not.toBe(null);

      getByText("Dodaj do ulubionych").click();

      expect(container.querySelector("ul li").innerHTML).toEqual("cytat / author")
    });
  });

});

import React from "react";
import {render, cleanup} from "react-testing-library";
import Quote from "../components/Quote";

describe("Zadanie 2 - async", () => {

  afterEach(cleanup);

  describe("presentational component", () => {

    it("renders button for fetching quote", () => {
      const fetchQuote = jest.fn();
      const { getByText } = render(<Quote fetchQuote={fetchQuote} />);

      const button = getByText("Pobierz cytat");
      button.click();

      expect(button.hasAttribute("disabled")).toEqual(false);
      expect(fetchQuote).toHaveBeenCalled();
    });

    it("button should be disabled when fetching is in progress", () => {
      const { getByText } = render(<Quote loading={true} />);

      const button = getByText("Pobierz cytat");

      expect(button.hasAttribute("disabled")).toEqual(true);
    });

    it("displays quote if defined", () => {
      const quote = {
        quote: "Chyba walnęliśmy jakiegoś jeża...",
        author: "Grucha"
      };

      const { getByText } = render(<Quote quote={quote} />);

      expect(getByText("Chyba walnęliśmy jakiegoś jeża... / Grucha")).not.toBe(null);
    });

    it("doens't display quote if not-defined", () => {
      const { container } = render(<Quote quote={null} />);

      expect(container.querySelector("p")).toBe(null);
    });

    it("displays Ładuję cytat... if loading is true", () => {
      const { getByText } = render(<Quote loading={true} />);

      expect(getByText("Ładuję cytat...")).not.toBe(null);
    });

    it("displays error if defined", () => {
      const error = "Error";
      const { getByText } = render(<Quote error={error} />);

      expect(getByText("Error")).not.toBe(null);
    });
  });

});

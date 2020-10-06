import React from "react";
import {render, cleanup, fireEvent} from "react-testing-library";
import reducer from "../redux/reducers";
import {changeFilter} from "../redux/actions";
import Articles from "../apps/ArticlesFilter";

describe("Zadanie 2", () => {

  const initialState = {
    filter: "all",
    list: [
      { title: "Pierwsze kroki z reduxem", category: "frontend" },
      { title: "JAVA to nie JavaScript", category: "backend" },
      { title: "CSS to moja pasja", category: "frontend" }
    ]
  };

  afterEach(cleanup);

  describe("reducer", () => {
    it("should have initial state", () => {
      expect(reducer(undefined, {}).articles).toEqual(initialState);
    });

    it("should change filter", () => {
      expect(reducer(undefined, changeFilter("frontend")).articles).toEqual({
        ...initialState,
        filter: "frontend"
      });
    });
  });

  describe("application", () => {

    it("renders all articles by default", () => {
      const { getByText } = render(<Articles />);

      initialState.list.forEach((item) => {
        expect(getByText(item.title)).not.toBe(null);
      })
    });

    it("renders filtered articles", () => {
      const { getByText, queryByText, container } = render(<Articles />);

      fireEvent.change(container.querySelector("select"), {
        target: {
          value: "frontend"
        }
      });

      initialState.list.forEach((item) => {
        if (item.category === "frontend") {
          expect(getByText(item.title)).not.toBe(null);
        } else {
          expect(queryByText(item.title)).toBe(null);
        }
      })
    });
  });
});

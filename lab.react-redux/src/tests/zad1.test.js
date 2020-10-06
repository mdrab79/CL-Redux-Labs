import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import {ADD_ARTICLE, ADD_USER, addArticle, addUser} from "../redux/actions";
import reducer from "../redux/reducers";
import App from "../components/App";

describe("Zadanie 1", () => {

  afterEach(cleanup);

  describe("actions", () => {
    it("ADD_ARTICLE is defined", () => {
      expect(typeof ADD_ARTICLE).toBe("string");
    });

    it("addArticle is defined", () => {
      expect(typeof addArticle).toBe("function");
      expect(addArticle({ title: "title", userId: "jan" })).toEqual({
        type: ADD_ARTICLE,
        payload: {
          title: "title",
          userId: "jan"
        }
      })
    });

    it("ADD_USER is defined", () => {
      expect(typeof ADD_USER).toBe("string");
    });

    it("addUser is defined", () => {
      expect(typeof addUser).toBe("function");
      expect(addUser("zbyszek")).toEqual({
        type: ADD_USER,
        payload: "zbyszek"
      })
    })
  });

  describe("reducer", () => {
    it("returns initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        users: {
          jan: 0,
          gosia: 0
        },
        articles: []
      });
    });

    it("reacts on ADD_ARTICLE action", () => {
      expect(reducer(undefined, addArticle({ title: "a", userId: "jan" }))).toEqual({
        users: {
          jan: 1,
          gosia: 0
        },
        articles: ["a"]
      })
    });

    it("reacts on ADD_USER action", () => {
      expect(reducer(undefined, addUser("zbyszek"))).toEqual({
        users: {
          jan: 0,
          gosia: 0,
          zbyszek: 0
        },
        articles: []
      })
    });
  });

  describe("application", () => {
    it("works as expected for newly created user", () => {
      const { getByText, container } = render(<App />);

      const inputs = container.querySelectorAll("input");

      fireEvent.change(inputs[0], {
        target: {
          value: "zbyszek"
        }
      });

      getByText("Dodaj użytkownika").click();

      container.querySelectorAll("select option").forEach((opt) => {
        expect(["jan", "gosia", "zbyszek"]).toContain(opt.innerHTML);
      });

      fireEvent.change(container.querySelector("select"), {
        target: {
          value: "zbyszek"
        }
      });

      fireEvent.change(inputs[1], {
        target: {
          value: "Artykuł zbyszka"
        }
      });

      getByText("Dodaj artykuł").click();

      expect(getByText("Artykuł zbyszka")).not.toBe(null);
      expect(getByText("zbyszek:1")).not.toBe(null);
    });
  })
});

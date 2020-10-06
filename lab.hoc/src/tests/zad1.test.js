import { render, cleanup, fireEvent } from "react-testing-library";
import React from "react";
import PropTypes from "prop-types";

import { ADD_ARTICLE, addArticle } from "../redux/actions";
import reducer from "../redux/reducers";
import UsersList from "../components/UsersList";
import ArticlesList from "../components/ArticlesList";
import ArticleInput from "../components/ArticleInput";

describe("Zadanie 1 - zliczanie artykułów", () => {

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
  });

  describe("<UsersList>", () => {
    it("should render list based on users prop", () => {
      const users = {
        jan: 10,
        gosia: 5
      };

      const { getByText } = render(<UsersList users={users}/>);

      expect(getByText("jan:10")).not.toBe(null);
      expect(getByText("gosia:5")).not.toBe(null);
    });

    it("should have prop-types", () => {
      expect(UsersList.propTypes).toEqual({
        users: PropTypes.object.isRequired
      })
    });
  });

  describe("<ArticlesList>", () => {
    it("should render list", () => {
      const articles = ["first", "second"];
      const { getByText } = render(<ArticlesList articles={articles} />);

      articles.forEach((title) => expect(getByText(title)).not.toBe(null));
    });

    it("should have prop-types", () => {
      expect(ArticlesList.propTypes).toEqual({
        articles: PropTypes.array.isRequired
      })
    });
  });

  describe("<ArticleInput>", () => {
    it("renders input", () => {
      const { container } = render(<ArticleInput />);

      expect(container.querySelector("input")).not.toBe(null);
    });

    it("renders select with options: jan, gosia", () => {
      const { container } = render(<ArticleInput />);

      expect(container.querySelector("select")).not.toBe(null);
      container.querySelectorAll("select option").forEach((opt) => {
        expect(["jan", "gosia"]).toContain(opt.textContent);
      });
    });

    it("renders button", () => {
      const { container } = render(<ArticleInput />);

      expect(container.querySelector("button")).not.toBe(null);
    });

    it("calls onArticleAdd on button click with input value", () => {
      const spy = jest.fn();
      const { container } = render(<ArticleInput onArticleAdd={spy}/>);


      fireEvent.change(container.querySelector("input"), {
        target: {
          value: "Title"
        }
      });

      fireEvent.change(container.querySelector("select"), {
        target: {
          value: "gosia"
        }
      });

      container.querySelector("button").click();

      expect(spy).toHaveBeenCalledWith({
        userId: "gosia",
        title: "Title"
      })
    })
  });

});

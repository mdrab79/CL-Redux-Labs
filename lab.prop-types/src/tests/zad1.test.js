import React from "react";
import User from "../User";
import PropTypes from "prop-types";
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("Zadanie 1", () => {

  describe("<User> component should have", () => {
    it("propTypes static field", () => {
      expect(typeof User.propTypes).toEqual("object");
    });

    it("firstName - string - required", () => {
      expect(User.propTypes.firstName).toBe(PropTypes.string.isRequired);
    });

    it("lastName - string - required", () => {
      expect(User.propTypes.lastName).toBe(PropTypes.string.isRequired);
    });

    it("onClick - function - required", () => {
      expect(User.propTypes.onClick).toBe(PropTypes.func.isRequired);
    });

    it("age - number", () => {
      expect(User.propTypes.age).toBe(PropTypes.number);
    });
  });

  describe("<User> component should render", () => {

    it("welcome message in h1", () => {
      const { container } = render(<User onClick={ () => {} } firstName="Jan" lastName="Kowalski" />);

      expect(container.querySelector("h1").textContent).toEqual("Cześć! Jan Kowalski")
    });

    it("age if defined", () => {
      const { container } = render(<User onClick={ () => {} } firstName="Jan" lastName="Kowalski" age={10}/>);

      expect(container.textContent).toContain("Masz 10 lat")
    });

    it("age if not defined", () => {
      const { container } = render(<User onClick={ () => {} } firstName="Jan" lastName="Kowalski"/>);

      expect(container.textContent).not.toContain("Masz 10 lat")
    });

    it("button which calls onClick handler", () => {
      const onClick = jest.fn();
      const { container } = render(<User onClick={ onClick } firstName="Jan" lastName="Kowalski"/>);

      fireEvent.click(container.querySelector("button"));

      expect(onClick).toHaveBeenCalled();
    })
  });
});

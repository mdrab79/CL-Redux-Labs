import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../App1';

describe("Zadanie 1", () => {

  afterEach(cleanup);

  it('renders proper content on / route', () => {
    window.location.hash = "#/";
    const { getByText } = render(<App />);

    expect(getByText("Witaj na stronie!")).not.toBe(null);
  });

  it('renders proper content on /hello/name route', () => {
    window.location.hash = "#/hello/Jan";
    const { getByText } = render(<App />);

    expect(getByText("Witaj, Jan")).not.toBe(null);
  });

  it('renders proper content on /checkage/17 route', () => {
    window.location.hash = "#/checkage/17";
    const { getByText } = render(<App />);

    expect(getByText("Niepełnoletni")).not.toBe(null);
  });

  it('renders proper content on /checkage/18 route', () => {
    window.location.hash = "#/checkage/18";
    const { getByText } = render(<App />);

    expect(getByText("Pełnoletni")).not.toBe(null);
  });

  it('renders proper content on /checkage/30 route', () => {
    window.location.hash = "#/checkage/30";
    const { getByText } = render(<App />);

    expect(getByText("Pełnoletni")).not.toBe(null);
  });

  it('renders links', () => {
    window.location.hash = "#/";
    const { container } = render(<App />);

    const url = ["/", "/hello/Jan", "/checkage/50"];

    container.querySelectorAll("a").forEach((el, index) => {
      expect(el.innerHTML).toContain(url[index]);
      expect(el.href).toContain(url[index]);
    })
  });

  it("active link should be bold", () => {
    window.location.hash = "#/checkage/50";

    const { getByText } = render(<App />);

    expect(getByText("/checkage/50").style["font-weight"]).toEqual("bold");
  });
});

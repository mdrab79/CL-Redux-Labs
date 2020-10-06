import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../App2';

describe("Zadanie 2", () => {

  afterEach(cleanup);

  it('renders proper content on / route', () => {
    window.location.hash = "#/";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("Witaj na stronie!")).not.toBe(null);
  });

  it('renders proper content on /blog route', () => {
    window.location.hash = "#/about";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("Blog")).not.toBe(null);
  });

  it('renders proper content on /pricing route', () => {
    window.location.hash = "#/pricing";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("Cennik")).not.toBe(null);
  });

  it('renders links', () => {
    window.location.hash = "#/";
    const { container } = render(<App />);

    const url = ["/", "/blog", "/pricing"];
    const text = ["Home", "Blog", "Pricing"];

    container.querySelectorAll("a").forEach((el, index) => {
      expect(el.innerHTML).toContain(text[index]);
      expect(el.href).toContain(url[index]);
    })
  });
});

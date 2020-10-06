import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../App2';

describe("Zadanie 2", () => {

  afterEach(cleanup);

  it('renders proper content on / route', () => {
    window.location.hash = "#/";
    const { container } = render(<App />);

    const text = ["www", "shop", "seo"];

    container.querySelectorAll("a").forEach((el, index) => {
      expect(el.innerHTML).toContain(text[index]);
      expect(el.href).toContain(`/services/${text[index]}`);
    })
  });

  it('renders proper content on /services/www route', () => {
    window.location.hash = "#/services/www";
    const { getByText } = render(<App />);

    expect(getByText("Proponujemy usługę: www")).not.toBe(null);
  });

  it('renders proper content on /services/shop route', () => {
    window.location.hash = "#/services/shop";
    const { getByText } = render(<App />);

    expect(getByText("Proponujemy usługę: shop")).not.toBe(null);
  });

  it('renders proper content on /services/seo route', () => {
    window.location.hash = "#/services/seo";
    const { getByText } = render(<App />);

    expect(getByText("Proponujemy usługę: seo")).not.toBe(null);
  });

  it('renders NotFound in case of wrong service', () => {
    window.location.hash = "#/services/xxx";
    const { getByText } = render(<App />);

    const link = getByText("Powrót do strony głównej");

    expect(link).not.toBe(null);
    expect(link.href).toContain("/#/");
  });

  it('renders NotFound in case of wrong path', () => {
    window.location.hash = "#/not-found";
    const { getByText } = render(<App />);

    const link = getByText("Powrót do strony głównej");

    expect(link).not.toBe(null);
    expect(link.href).toContain("/#/");
  });
});

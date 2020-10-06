import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../App1';

describe("Zadanie 1", () => {

  afterEach(cleanup);

  it('renders proper content on / route', () => {
    window.location.hash = "#/";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("Witaj na stronie!")).not.toBe(null);
  });

  it('renders proper content on /about route', () => {
    window.location.hash = "#/about";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("O nas")).not.toBe(null);
  });

  it('renders proper content on /about/us route', () => {
    window.location.hash = "#/about/us";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("O nas")).not.toBe(null);
    expect(getByText("Trochę więcej o nas...")).not.toBe(null);
  });

  it('renders proper content on /about/company route', () => {
    window.location.hash = "#/about/company";
    const { getByText } = render(<App />);

    expect(getByText("Aplikacja React z React Router")).not.toBe(null);
    expect(getByText("O nas")).not.toBe(null);
    expect(getByText("Trochę więcej na temat firmy...")).not.toBe(null);
  });
});

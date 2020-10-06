import React from "react";
import { render, cleanup} from "react-testing-library";

import App from "../App";

describe("Rocket app", () => {

  afterEach(cleanup);

  it("should works :)", () => {
    jest.useFakeTimers();

    const { container, getByText } = render(<App/>);

    expect(getByText("Launch in 5")).not.toBe(null);
    expect(container.querySelector(".rocket").className).not.toContain("launched");

    getByText("Launch the rocket!").click();

    jest.runOnlyPendingTimers();
    expect(getByText("Launch in 4")).not.toBe(null);
    jest.runOnlyPendingTimers();
    expect(getByText("Launch in 3")).not.toBe(null);
    jest.runOnlyPendingTimers();
    expect(getByText("Launch in 2")).not.toBe(null);
    jest.runOnlyPendingTimers();
    expect(getByText("Launch in 1")).not.toBe(null);
    jest.runOnlyPendingTimers();
    expect(getByText("Launch in 0")).not.toBe(null);
    jest.runOnlyPendingTimers();

    expect(container.querySelector(".rocket").className).toContain("launched");
  });
});

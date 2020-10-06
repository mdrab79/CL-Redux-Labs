import React from "react";
import { render, cleanup } from "react-testing-library";
import withTimer from "../withTimer";
import { Stopper, StopperWithTimer } from "../components/Stopper";

describe("Zadanie 2 - stopper with timer", () => {

  afterEach(cleanup);

  it("withTimer is a function", () => {
    expect(typeof withTimer).toBe("function");
  });

  it("withTime injects counter, startTimer, stopTimer", () => {
    const FakeFunCmp = jest.fn(() => <div/>);
    const WT = withTimer(FakeFunCmp);

    render(<WT />);

    expect(FakeFunCmp).toHaveBeenCalledWith({
      counter: 0,
      startTimer: expect.any(Function),
      stopTimer: expect.any(Function),
    }, {})
  });

  describe("<Stopper>", () => {
    it("renders start button", () => {
      const startTimer = jest.fn();
      const { getByText } = render(<Stopper startTimer={startTimer} />);

      getByText("start").click();

      expect(startTimer).toHaveBeenCalled();
    });

    it("renders stop button", () => {
      const stop = jest.fn();
      const { getByText } = render(<Stopper stopTimer={stop} />);

      getByText("stop").click();

      expect(stop).toHaveBeenCalled();
    });

    it("renders counter value in <p>", () => {
      const { container } = render(<Stopper counter={5} />);

      expect(container.querySelector("p").innerHTML).toEqual("5");
    });

    it("renders children", () => {
      const { container } = render(<Stopper>text</Stopper>);

      expect(container.querySelector("p").nextSibling.textContent).toEqual("text");
    });
  });

  describe("<StopperWithTimer>", () => {
    it("starts and stops timer", () => {
      jest.useFakeTimers();

      const { getByText, container } = render(<StopperWithTimer/>);

      getByText("start").click();
      jest.runOnlyPendingTimers();

      expect(container.querySelector("p").innerHTML).toEqual("1");

      jest.runOnlyPendingTimers();
      expect(container.querySelector("p").innerHTML).toEqual("2");

      getByText("stop").click();
      jest.runOnlyPendingTimers();

      expect(container.querySelector("p").innerHTML).toEqual("2");
    });

    it("renders children", () => {
      const { container } = render(<StopperWithTimer>text</StopperWithTimer>);

      expect(container.querySelector("p").nextSibling.textContent).toEqual("text");
    });
  })
});

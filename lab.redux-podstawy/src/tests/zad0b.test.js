import counterReducer from "../redux/reducers/counter.js";
import counter from "../counter";
import { INCREMENT, DECREMENT, increment, decrement } from "../redux/actions/counter.js";

describe("zad 0b", () => {
  describe("reducer", () => {
    it("increment value", () => {
      expect(counterReducer(0, increment(2))).toEqual(2);
    });

    it("decrement value", () => {
      expect(counterReducer(5, decrement(2))).toEqual(3);
    });

    it("always return state", () => {
      expect(counterReducer(1, { type: "FAKE" })).toEqual(1);
    });
  });


  describe("actions", () => {
    it("INCREMENT type is exported", () => {
      expect(typeof INCREMENT).toBe("string");
    });

    it("DECREMENT type is exported", () => {
      expect(typeof DECREMENT).toBe("string");
    });

    it("increment action creator", () => {
      expect(typeof increment).toBe("function");
      expect(increment(5)).toEqual({ type: INCREMENT, value: 5 });
    });

    it("decrement action creator", () => {
      expect(typeof decrement).toBe("function");
      expect(decrement(5)).toEqual({ type: DECREMENT, value: 5 });
    });
  });

  describe("app", () => {

    it("logs proper output to the console", () => {
      jest.spyOn(console, "log");

      counter();

      expect(console.log).toHaveBeenCalledTimes(3);
      expect(console.log).toHaveBeenNthCalledWith(1, "from subscribe", 5);
      expect(console.log).toHaveBeenNthCalledWith(2, "from subscribe", 3);
      expect(console.log).toHaveBeenNthCalledWith(3, 1);
    });
  });
});



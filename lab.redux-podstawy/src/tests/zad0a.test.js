import { createStore } from "../redux/customStore";

describe("Custom store implementation", () => {

  describe("implements store API", () => {
    it("getState function", () => {
      const store = createStore();

      expect(typeof store.getState).toBe("function")
    });

    it("subscribe function", () => {
      const store = createStore();

      expect(typeof store.subscribe).toBe("function")
    });

    it("dispatch function", () => {
      const store = createStore();

      expect(typeof store.subscribe).toBe("function")
    });
  });

  describe("getState", () => {
    it("returns initial state for the first time", () => {
      const initialState = "state";
      const store = createStore(() => "{}", initialState);

      expect(store.getState()).toEqual(initialState);
    });

    it("returns new calculated state after dispatch an action", () => {
      const initialState = "state";
      const dummyReducer = () => "newState";
      const store = createStore(dummyReducer, initialState);

      store.dispatch();

      expect(store.getState()).toEqual("newState");
    });
  });

  describe("dispatch", () => {

    it("call reducer with current state and action", () => {
      const initialState = "state";
      const reducer = jest.fn();
      const action = { type: "FAKE" };

      const store = createStore(reducer, initialState);

      store.dispatch(action);

      expect(reducer).toHaveBeenCalledWith(initialState, action);
    });
  });

  describe("subscribe", () => {
    it("subscribes on state changes", () => {
      const handler = jest.fn();
      const store = createStore(() => "", "");

      store.subscribe(handler);
      store.dispatch();

      expect(handler).toHaveBeenCalled();
    });

    it("returns a function that remove listener", () => {
      const handler = jest.fn();
      const store = createStore(() => "", "");

      const unsubscribe = store.subscribe(() => handler());

      expect(typeof unsubscribe).toBe("function");

      unsubscribe();
      store.dispatch();

      expect(handler).not.toHaveBeenCalled();
    });
  });
});

import { createStore } from "redux";
import reducer from "../redux/reducers/index.js";
import {increment} from "../redux/actions/counter.js";
import {depositMoney} from "../redux/actions/bank.js";

describe("zad 3", () => {

  it("reducers should be combined", () => {
    const store = createStore(reducer, {});

    expect(store.getState()).toEqual({
      counter: 0,
      bank: 0
    });
  });

  it("store should react to actions", () => {
    const store = createStore(reducer, {});

    store.dispatch(increment(5));
    store.dispatch(depositMoney(10));

    expect(store.getState()).toEqual({
      counter: 5,
      bank: 10
    });
  })

});

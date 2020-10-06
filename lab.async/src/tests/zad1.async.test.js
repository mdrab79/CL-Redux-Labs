import reducer from "../redux/reducer";
import {quoteError, quoteFetched, startFetching} from "../redux/actions";

describe("Zadanie 1 - async", () => {

  const initialState = {
    loading: false,
    error: "",
    quote: null
  };

  it("reducer has initial state", () => {
    const state = reducer(undefined, {}).quote;

    expect(state).toEqual(initialState);
  });

  it("reducer reacts on QUOTE_FETCHING action", () => {
    const state = reducer(undefined, startFetching()).quote;

    expect(state).toEqual({
      ...initialState,
      loading: true
    });
  });

  it("reducer reacts on QUOTE_FETCHED action", () => {
    const quote = {
      quote: "cytat",
      author: "author"
    };
    const state = reducer(undefined, quoteFetched(quote)).quote;

    expect(state).toEqual({
      error: "",
      loading: false,
      quote
    });
  });

  it("reducer reacts on QUOTE_ERROR action", () => {
    const state = reducer(undefined, quoteError("error")).quote;

    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "error"
    });
  });

});

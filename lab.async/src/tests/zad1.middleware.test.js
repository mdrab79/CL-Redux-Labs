import api from "../api";
import {fetchQuote, quoteError, quoteFetched, startFetching} from "../redux/actions";

jest.mock("../api");

describe("fetchQuote", () => {

  it("dispatch proper actions on succes", () => {
    const dispatch = jest.fn();
    const quote = { quote: "cytat", author: "author" };
    api.fetchQuote.mockImplementation(() => Promise.resolve(quote));

    return fetchQuote()(dispatch).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, startFetching());
      expect(dispatch).toHaveBeenNthCalledWith(2, quoteFetched(quote));
    });
  });

  it("dispatch proper actions on error", () => {
    const dispatch = jest.fn();
    const error = "error";
    api.fetchQuote.mockImplementation(() => Promise.reject(error));

    return fetchQuote()(dispatch).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, startFetching());
      expect(dispatch).toHaveBeenNthCalledWith(2, quoteError(error));
    });
  });
});

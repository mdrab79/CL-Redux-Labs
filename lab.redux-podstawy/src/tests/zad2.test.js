import {WITHDRAW, DEPOSIT, withdrawMoney, depositMoney } from "../redux/actions/bank.js";
import reducer from "../redux/reducers/bank.js";
import bankApp from "../bankApp";

describe("zad 2", () => {
  describe("actions", () => {
    it("WITHDRAW type is exported", () => {
      expect(typeof WITHDRAW).toBe("string");
    });

    it("DEPOSIT type is exported", () => {
      expect(typeof DEPOSIT).toBe("string");
    });

    it("withdrawMoney action creator", () => {
      expect(typeof withdrawMoney).toBe("function");
      expect(withdrawMoney(5)).toEqual({ type: WITHDRAW, amount: 5 });
    });

    it("depositMoney action creator", () => {
      expect(typeof depositMoney).toBe("function");
      expect(depositMoney(5)).toEqual({ type: DEPOSIT, amount: 5 });
    });
  });

  describe("reducer", () => {
    it("deposit money=", () => {
      expect(reducer(0, depositMoney(2))).toEqual(2);
    });

    it("withdraw money", () => {
      expect(reducer(5, withdrawMoney(2))).toEqual(3);
    });

    it("always return state", () => {
      expect(reducer(1, { type: "FAKE" })).toEqual(1);
    });

    it("prevents -saldo", () => {
      expect(reducer(0, withdrawMoney(100))).toEqual(0);
    });
  });

  describe("app", () => {

    let root;

    beforeEach(() => {
      root = document.createElement("div");
      bankApp.start(root);
      document.body.appendChild(root);
    });

    afterEach(() => {
      document.body.removeChild(root);
    });

    it("should display 'Saldo 0' at the beggining", () => {
      expect(bankApp.rootElement.textContent).toContain("Saldo:0");
    });

    it("should increase saldo on click 'wplac'", () => {
      bankApp.inputEl.value = 200;
      bankApp.depositEl.click();

      expect(bankApp.saldoEl.innerText).toEqual("200 PLN")
    });

    it("should decrease saldo on click 'wyplac'", () => {
      bankApp.inputEl.value = 200;
      bankApp.depositEl.click();
      bankApp.withdrawEl.click();

      expect(bankApp.saldoEl.innerText).toEqual("0 PLN")
    });

  });
});

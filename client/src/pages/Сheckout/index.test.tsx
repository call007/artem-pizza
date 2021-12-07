import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { Сheckout } from ".";
import { PATH } from "../../consts";
import { PizzaProvider } from "../../context/PizzaContext";

describe("Сheckout", () => {
  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      history.push(PATH.PizzaPreview);

      render(
        <Router history={history}>
          <PizzaProvider>
            <Сheckout />
          </PizzaProvider>
        </Router>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });
});

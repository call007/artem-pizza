import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";
import { PATH } from "../../consts";
import { PizzaPreview } from ".";
import { PizzaContext, PizzaProvider } from "../../PizzaContext";
import { data } from "../../data";

describe("PizzaPreview", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaContext.Provider
          value={
            {
              state: {
                pizza: {
                  size: data.size[0].value,
                  dough: data.dough[0].value,
                  sauce: data.sauce[0].value,
                  cheese: [],
                  vegetables: [],
                  meat: [],
                },
              },
            } as any
          }
        >
          <PizzaPreview />
        </PizzaContext.Provider>
      </MemoryRouter>
    );

    expect(getByText("30 см на тонком тесте")).toBeInTheDocument();
    expect(getByText("Томатный соус")).toBeInTheDocument();
  });

  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      history.push(PATH.PizzaPreview);

      render(
        <Router history={history}>
          <PizzaProvider>
            <PizzaPreview />
          </PizzaProvider>
        </Router>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });
});

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
                  size: data.filter(
                    (ingredient) => ingredient.category === "size"
                  )[0].name,
                  dough: data.filter(
                    (ingredient) => ingredient.category === "dough"
                  )[0].name,
                  sauce: data.filter(
                    (ingredient) => ingredient.category === "sauce"
                  )[0].name,
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

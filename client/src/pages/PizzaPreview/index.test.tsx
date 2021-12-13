import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter, Router } from "react-router";
import { PizzaPreview } from ".";
import { PATH } from "../../consts";
import { mockStore } from "../../mocks/store";
import { store } from "../../store/store";

describe("PizzaPreview", () => {
  it("renders correctly", async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ReduxProvider store={mockStore}>
          <PizzaPreview />
        </ReduxProvider>
      </MemoryRouter>
    );

    expect(getByText("Твоя пицца")).toBeInTheDocument();
    expect(container.innerHTML).toMatch("на тонком тесте");
    expect(
      getByText("Брокколи • Грибы • Оливки • Лук • Перец • Ананас • Томаты")
    ).toBeInTheDocument();
  });

  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      history.push(PATH.PizzaPreview);

      render(
        <ReduxProvider store={store}>
          <Router history={history}>
            <PizzaPreview />
          </Router>
        </ReduxProvider>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });
});

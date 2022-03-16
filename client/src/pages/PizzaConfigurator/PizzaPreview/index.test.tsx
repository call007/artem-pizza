import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { PizzaPreview } from ".";
import { mockStore } from "../../../mocks/mockStore";
import { lightTheme } from "../../../styles";

describe("PizzaPreview", () => {
  it("renders correctly", async () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <ReduxProvider store={mockStore}>
          <ThemeProvider theme={lightTheme}>
            <PizzaPreview />
          </ThemeProvider>
        </ReduxProvider>
      </MemoryRouter>
    );

    expect(getByText("Твоя пицца")).toBeInTheDocument();
    expect(container.innerHTML).toMatch("на тонком тесте");
    expect(container.innerHTML).toMatch(
      "Брокколи • Грибы • Оливки • Лук • Перец • Ананас • Томаты • Бекон • Курица"
    );
  });
});

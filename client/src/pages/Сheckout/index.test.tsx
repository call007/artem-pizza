import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { Сheckout } from ".";
import { mockStore } from "../../mocks/mockStore";
import { lightTheme } from "../../styles";

describe("Сheckout", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ReduxProvider store={mockStore}>
        <MemoryRouter>
          <ThemeProvider theme={lightTheme}>
            <Сheckout />
          </ThemeProvider>
        </MemoryRouter>
      </ReduxProvider>
    );

    expect(getByText("Оформление заказа")).toBeInTheDocument();
    expect(getByText("Оплатить 1880 руб")).toBeInTheDocument();
  });
});

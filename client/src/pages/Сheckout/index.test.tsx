import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Сheckout } from ".";
import { mockStore } from "../../mocks/mockStore";
import { theme } from "../../styles";

describe("Сheckout", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ReduxProvider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Сheckout />
        </ThemeProvider>
      </ReduxProvider>
    );

    expect(getByText("Оформление заказа")).toBeInTheDocument();
    expect(getByText("Оплатить 1700 руб")).toBeInTheDocument();
  });
});

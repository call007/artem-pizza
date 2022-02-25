import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import { LogInForm } from ".";
import { MESSAGES } from "../../../consts";
import { lightTheme } from "../../../styles";

describe("LogInForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={lightTheme}>
        <LogInForm onFormSubmit={() => null} />
      </ThemeProvider>
    );

    expect(getByLabelText("E-mail")).toBeInTheDocument();
    expect(getByLabelText("Пароль")).toBeInTheDocument();
    expect(getByText("Войти")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects email and password", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <ThemeProvider theme={lightTheme}>
          <LogInForm onFormSubmit={formSubmit} />
        </ThemeProvider>
      );

      fireEvent.input(getByLabelText("E-mail"), {
        target: { value: "call007@mail.ru" },
      });
      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "d1#F_v3fL" },
      });

      await act(async () => {
        fireEvent.click(getByText("Войти"));
      });

      expect(formSubmit).toBeCalledWith({
        email: "call007@mail.ru",
        password: "d1#F_v3fL",
      });
    });

    it("validates that email and password are filled in", async () => {
      const { getByText, getByLabelText } = render(
        <ThemeProvider theme={lightTheme}>
          <LogInForm onFormSubmit={() => null} />
        </ThemeProvider>
      );

      await act(async () => {
        fireEvent.click(getByText("Войти"));
      });

      expect(
        getByLabelText("E-mail").parentElement?.parentElement?.innerHTML
      ).toMatch(MESSAGES.Required);

      expect(
        getByLabelText("Пароль").parentElement?.parentElement?.innerHTML
      ).toMatch(MESSAGES.Required);
    });

    it("validates that email is the correct email", async () => {
      const { getByText, getByLabelText } = render(
        <ThemeProvider theme={lightTheme}>
          <LogInForm onFormSubmit={() => null} />
        </ThemeProvider>
      );

      fireEvent.input(getByLabelText("E-mail"), {
        target: { value: "call007" },
      });

      await act(async () => {
        fireEvent.click(getByText("Войти"));
      });

      expect(
        getByLabelText("E-mail").parentElement?.parentElement?.innerHTML
      ).toMatch(MESSAGES.Email);
    });
  });
});

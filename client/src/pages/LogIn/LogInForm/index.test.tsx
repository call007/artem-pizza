import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { LogInForm } from ".";
import { Messages } from "../../../consts";

describe("LogInForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <LogInForm formSubmit={() => null} />
    );

    expect(getByLabelText("E-mail")).toBeInTheDocument();
    expect(getByLabelText("Пароль")).toBeInTheDocument();
    expect(getByText("Войти")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects email and password", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <LogInForm formSubmit={formSubmit} />
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
        <LogInForm formSubmit={() => null} />
      );

      await act(async () => {
        fireEvent.click(getByText("Войти"));
      });

      expect(getByLabelText("E-mail").parentElement?.innerHTML).toMatch(
        Messages.Required
      );

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Required
      );
    });

    it("validates that email is the correct email", async () => {
      const { getByText, getByLabelText } = render(
        <LogInForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("E-mail"), {
        target: { value: "call007" },
      });

      await act(async () => {
        fireEvent.click(getByText("Войти"));
      });

      expect(getByLabelText("E-mail").parentElement?.innerHTML).toMatch(
        Messages.Email
      );
    });
  });
});
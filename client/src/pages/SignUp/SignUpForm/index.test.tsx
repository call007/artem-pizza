import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { SignUpForm } from ".";
import { Messages } from "../../../consts";

describe("SignUpForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <SignUpForm formSubmit={() => null} />
    );

    expect(getByLabelText("E-mail")).toBeInTheDocument();
    expect(getByLabelText("Пароль")).toBeInTheDocument();
    expect(getByLabelText("Подтвердите пароль")).toBeInTheDocument();
    expect(getByText("Зарегистрироваться")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects email, password and password repeat", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={formSubmit} />
      );

      fireEvent.input(getByLabelText("E-mail"), {
        target: { value: "call007@mail.ru" },
      });
      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "d1#F_v3fL" },
      });
      fireEvent.input(getByLabelText("Подтвердите пароль"), {
        target: { value: "d1#F_v3fL" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(formSubmit).toBeCalledWith({
        email: "call007@mail.ru",
        password: "d1#F_v3fL",
        passwordRepeat: "d1#F_v3fL",
      });
    });

    it("validates that email, password and repeat password are filled in", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("E-mail").parentElement?.innerHTML).toMatch(
        Messages.Required
      );

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Required
      );

      expect(
        getByLabelText("Подтвердите пароль").parentElement?.innerHTML
      ).toMatch(Messages.Required);
    });

    it("validates that email is the correct email", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("E-mail"), {
        target: { value: "call007" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("E-mail").parentElement?.innerHTML).toMatch(
        Messages.Email
      );
    });

    it("validates that password is longer than 6 symbols", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "d1#F_" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Password
      );
    });

    it("validates that password has numbers", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "d#F_fDdbv" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Password
      );
    });

    it("validates that password has special symbols", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "dd5Fd184Dv4" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Password
      );
    });

    it("validates that password has not cyrillic characters", async () => {
      const { getByText, getByLabelText } = render(
        <SignUpForm formSubmit={() => null} />
      );

      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "d1#F_v3fLдМ" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(getByLabelText("Пароль").parentElement?.innerHTML).toMatch(
        Messages.Password
      );
    });
  });
});

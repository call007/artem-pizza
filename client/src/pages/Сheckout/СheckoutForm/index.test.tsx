import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import { СheckoutForm } from ".";
import { MESSAGES } from "../../../consts";
import { lightTheme } from "../../../styles";
import { PaymentSystem } from "../../../types";

const renderСheckoutForm = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <СheckoutForm onFormSubmit={() => null} />
    </ThemeProvider>
  );

describe("СheckoutForm", () => {
  it("renders correctly", () => {
    const { getByLabelText, getByPlaceholderText } = renderСheckoutForm();

    expect(getByPlaceholderText("Введите адрес")).toBeInTheDocument();
    expect(getByLabelText("подъезд")).toBeInTheDocument();
    expect(getByLabelText("этаж")).toBeInTheDocument();
    expect(getByLabelText("квартира")).toBeInTheDocument();

    expect(getByPlaceholderText("Номер карты")).toBeInTheDocument();
    expect(getByPlaceholderText("MM/YYYY")).toBeInTheDocument();
    expect(getByPlaceholderText("CVV")).toBeInTheDocument();
    expect(getByPlaceholderText("Имя как на карте")).toBeInTheDocument();
  });

  describe("on card number change", () => {
    it("breaks the card number into groups of four digits", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Номер карты") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "1234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });

    it("limits the card number by 19 digits", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Номер карты") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "12341234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });

    it("detects as MasterCard", () => {
      const { getByPlaceholderText, getByLabelText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, { target: { value: "5555444433332222" } });

      expect(getByLabelText(PaymentSystem.Mastercard)).toBeInTheDocument();
    });

    it("detects as Visa", () => {
      const { getByPlaceholderText, getByLabelText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, { target: { value: "4444333322221111" } });

      expect(getByLabelText(PaymentSystem.Visa)).toBeInTheDocument();
    });
  });

  describe("on card expiration change", () => {
    it("breaks the card date into groups of two and four symbols", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "122021" } });

      expect(ccInput.value).toEqual("12/2021");
    });

    it("limits the card date by seven symbols", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "122021123" } });

      expect(ccInput.value).toEqual("12/2021");
    });

    it("prevents input bigger than 31 into day group", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "902021" } });

      expect(ccInput.value).toEqual("");
    });
  });

  describe("on card CVV change", () => {
    it("limits the card number by 3 digits", () => {
      const { getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("CVV") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "12345" } });

      expect(ccInput.value).toEqual("123");
    });
  });

  describe("on submit", () => {
    it("collects address, apartment, entrance, floor, cardCVV, cardExpiration, cardName, cardNumber", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText, getByPlaceholderText, container } =
        render(
          <ThemeProvider theme={lightTheme}>
            <СheckoutForm onFormSubmit={formSubmit} />
          </ThemeProvider>
        );

      fireEvent.input(getByPlaceholderText("Введите адрес"), {
        target: { value: "ул. Гимназическая 81" },
      });
      fireEvent.input(getByLabelText("подъезд"), {
        target: { value: "3" },
      });
      fireEvent.input(getByLabelText("этаж"), {
        target: { value: "12" },
      });
      fireEvent.input(getByLabelText("квартира"), {
        target: { value: "254" },
      });

      fireEvent.input(getByPlaceholderText("Номер карты"), {
        target: { value: "1234 1234 1234 1234" },
      });
      fireEvent.input(getByPlaceholderText("MM/YYYY"), {
        target: { value: "12/2024" },
      });
      fireEvent.input(getByPlaceholderText("CVV"), {
        target: { value: "125" },
      });
      fireEvent.input(getByPlaceholderText("Имя как на карте"), {
        target: { value: "IVAN IVANOV" },
      });

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(formSubmit).toBeCalledWith({
        address: "ул. Гимназическая 81",
        entrance: "3",
        floor: "12",
        apartment: "254",
        card_number: "1234 1234 1234 1234",
        card_expiration: "12/2024",
        card_CVV: "125",
        name: "IVAN IVANOV",
      });
    });

    it("validates that address, cardCVV, cardExpiration, cardName, cardNumber are filled in", async () => {
      const { container, getByPlaceholderText } = renderСheckoutForm();

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(
        getByPlaceholderText("Введите адрес").parentElement?.parentElement
          ?.innerHTML
      ).toMatch(MESSAGES.Required);

      expect(
        getByPlaceholderText("Номер карты").parentElement?.parentElement
          ?.innerHTML
      ).toMatch(MESSAGES.Required);

      expect(
        getByPlaceholderText("MM/YYYY").parentElement?.parentElement?.innerHTML
      ).toMatch(MESSAGES.Required);

      expect(
        getByPlaceholderText("CVV").parentElement?.parentElement?.innerHTML
      ).toMatch(MESSAGES.Required);

      expect(
        getByPlaceholderText("Имя как на карте").parentElement?.parentElement
          ?.innerHTML
      ).toMatch(MESSAGES.Required);
    });

    it("validates that card name is correct", async () => {
      const { container, getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, {
        target: { value: "1234" },
      });

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(
        getByPlaceholderText("Номер карты").parentElement?.parentElement
          ?.innerHTML
      ).toMatch(MESSAGES.CardNumber);
    });

    it("validates that card expiration is correct", async () => {
      const { container, getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("MM/YYYY");

      fireEvent.input(ccInput, {
        target: { value: "1234" },
      });

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(ccInput.parentElement?.parentElement?.innerHTML).toMatch(
        MESSAGES.CardExpiration
      );
    });

    it("validates that card CVV code is correct", async () => {
      const { container, getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("CVV");

      fireEvent.input(ccInput, {
        target: { value: "12" },
      });

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(ccInput.parentElement?.parentElement?.innerHTML).toMatch(
        MESSAGES.CardCVV
      );
    });

    it("validates that card name is correct", async () => {
      const { container, getByPlaceholderText } = renderСheckoutForm();

      const ccInput = getByPlaceholderText("Имя как на карте");

      fireEvent.input(ccInput, {
        target: { value: "Ivan" },
      });

      const formEl = container.getElementsByTagName("form")[0];

      await act(async () => {
        fireEvent.submit(formEl);
      });

      expect(ccInput.parentElement?.parentElement?.innerHTML).toMatch(
        MESSAGES.CardName
      );
    });
  });
});

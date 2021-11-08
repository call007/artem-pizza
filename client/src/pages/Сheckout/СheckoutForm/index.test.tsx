import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { СheckoutForm } from ".";
import { Messages } from "../../../consts";

describe("СheckoutForm", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <СheckoutForm formSubmit={() => null} />
    );

    expect(getByPlaceholderText("Введите адрес")).toBeInTheDocument();
    expect(getByLabelText("подъезд")).toBeInTheDocument();
    expect(getByLabelText("этаж")).toBeInTheDocument();
    expect(getByLabelText("квартира")).toBeInTheDocument();

    expect(getByPlaceholderText("Номер карты")).toBeInTheDocument();
    expect(getByPlaceholderText("MM/YYYY")).toBeInTheDocument();
    expect(getByPlaceholderText("CVV")).toBeInTheDocument();
    expect(getByPlaceholderText("Имя как на карте")).toBeInTheDocument();

    expect(getByText("Отправить")).toBeInTheDocument();
  });

  describe("on card number change", () => {
    it("breaks the card number into groups of four digits", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Номер карты") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "1234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });

    it("limits the card number by 19 digits", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Номер карты") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "12341234123412341234" } });

      expect(ccInput.value).toEqual("1234 1234 1234 1234");
    });

    it("detects as MasterCard", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, { target: { value: "5555444433332222" } });

      expect(ccInput.parentElement?.innerHTML).toMatch("MasterCard");
    });

    it("detects as Visa", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, { target: { value: "4444333322221111" } });

      expect(ccInput.parentElement?.innerHTML).toMatch("Visa");
    });
  });

  describe("on card expiration change", () => {
    it("breaks the card date into groups of two and four symbols", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "122021" } });

      expect(ccInput.value).toEqual("12/2021");
    });

    it("limits the card date by seven symbols", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "122021123" } });

      expect(ccInput.value).toEqual("12/2021");
    });

    it("prevents input bigger than 31 into day group", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("MM/YYYY") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "902021" } });

      expect(ccInput.value).toEqual("");
    });
  });

  describe("on card CVV change", () => {
    it("limits the card number by 3 digits", () => {
      const { getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("CVV") as HTMLInputElement;
      fireEvent.input(ccInput, { target: { value: "12345" } });

      expect(ccInput.value).toEqual("123");
    });
  });

  describe("on submit", () => {
    it("collects address, apartment, entrance, floor, cardCVV, cardExpiration, cardName, cardNumber", async () => {
      const formSubmit = jest.fn();
      const { getByText, getByLabelText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={formSubmit} />
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

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(formSubmit).toBeCalledWith({
        address: "ул. Гимназическая 81",
        entrance: "3",
        floor: "12",
        apartment: "254",
        cardNumber: "1234 1234 1234 1234",
        cardExpiration: "12/2024",
        cardCVV: "125",
        cardName: "IVAN IVANOV",
      });
    });

    it("validates that address, cardCVV, cardExpiration, cardName, cardNumber are filled in", async () => {
      const { getByText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(
        getByPlaceholderText("Введите адрес").parentElement?.innerHTML
      ).toMatch(Messages.Required);

      expect(
        getByPlaceholderText("Номер карты").parentElement?.innerHTML
      ).toMatch(Messages.Required);

      expect(getByPlaceholderText("MM/YYYY").parentElement?.innerHTML).toMatch(
        Messages.Required
      );

      expect(getByPlaceholderText("CVV").parentElement?.innerHTML).toMatch(
        Messages.Required
      );

      expect(
        getByPlaceholderText("Имя как на карте").parentElement?.innerHTML
      ).toMatch(Messages.Required);
    });

    it("validates that card name is correct", async () => {
      const { getByText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Номер карты");

      fireEvent.input(ccInput, {
        target: { value: "1234" },
      });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(
        getByPlaceholderText("Номер карты").parentElement?.innerHTML
      ).toMatch(Messages.CardNumber);
    });

    it("validates that card expiration is correct", async () => {
      const { getByText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("MM/YYYY");

      fireEvent.input(ccInput, {
        target: { value: "1234" },
      });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(ccInput.parentElement?.innerHTML).toMatch(Messages.CardExpiration);
    });

    it("validates that card CVV code is correct", async () => {
      const { getByText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("CVV");

      fireEvent.input(ccInput, {
        target: { value: "12" },
      });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(ccInput.parentElement?.innerHTML).toMatch(Messages.CardCVV);
    });

    it("validates that card name is correct", async () => {
      const { getByText, getByPlaceholderText } = render(
        <СheckoutForm formSubmit={() => null} />
      );

      const ccInput = getByPlaceholderText("Имя как на карте");

      fireEvent.input(ccInput, {
        target: { value: "Ivan" },
      });

      await act(async () => {
        fireEvent.click(getByText("Отправить"));
      });

      expect(ccInput.parentElement?.innerHTML).toMatch(Messages.CardName);
    });
  });
});

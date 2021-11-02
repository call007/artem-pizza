import { ReactEventHandler } from "react";
import { RegisterOptions } from "react-hook-form";
import {
  cardExpirationRegExp,
  isThisACardExpiration,
  normalizeCardExpiration,
} from "../normalize/cardExpiration";
import {
  cardNumberRegExp,
  isThisACardNumber,
  normalizeCardNumber,
} from "../normalize/cardNumber";

export function useValidators() {
  const required: RegisterOptions["required"] = "Обязательное поле";

  const cardNumber: {
    register: RegisterOptions;
    onKeyPress: ReactEventHandler<HTMLInputElement>;
  } = {
    register: {
      pattern: {
        value: cardNumberRegExp,
        message: "Неверный формат номера банковской карты",
      },
      onChange: (event) => {
        const target = event.target;
        const { value } = target;
        target.value = normalizeCardNumber(value);
      },
    },
    onKeyPress: (event) => {
      if (isThisACardNumber(event.currentTarget.value)) {
        event.preventDefault();
      }
    },
  };

  const cardExpiration: {
    register: RegisterOptions;
    onKeyPress: ReactEventHandler<HTMLInputElement>;
  } = {
    register: {
      pattern: {
        value: cardExpirationRegExp,
        message: "Неверный формат срока действия банковской карты",
      },
      onChange: (event) => {
        const target = event.target;
        const { value } = target;
        target.value = normalizeCardExpiration(value);
      },
    },
    onKeyPress: (event) => {
      if (isThisACardExpiration(event.currentTarget.value)) {
        event.preventDefault();
      }
    },
  };

  return {
    required,
    cardNumber,
    cardExpiration,
  };
}

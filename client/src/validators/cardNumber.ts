import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { REG_EXP, Messages } from "../consts";
import { normalizeCardNumber } from "../normalize";

export const cardNumber: RegisterOptions = {
  pattern: {
    value: REG_EXP.cardNumber,
    message: Messages.CardNumber,
  },
  maxLength: 19,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    target.value = normalizeCardNumber(target.value);
  },
};

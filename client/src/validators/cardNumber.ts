import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { MESSAGES, REG_EXP } from "../consts";
import { normalizeCardNumber } from "../normalize";

export const cardNumber = (
  onChangeCallback?: (value: string) => void
): Pick<RegisterOptions, "pattern" | "maxLength" | "onChange"> => ({
  pattern: {
    value: REG_EXP.cardNumber,
    message: MESSAGES.CardNumber,
  },
  maxLength: 19,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const normalizeValue = normalizeCardNumber(target.value);
    target.value = normalizeValue;
    onChangeCallback?.(normalizeValue);
  },
});

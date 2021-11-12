import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";
import { normalizeCardExpiration } from "../normalize";

export const cardExpiration: RegisterOptions = {
  pattern: {
    value: REG_EXP.cardExpiration,
    message: MESSAGES.CardExpiration,
  },
  maxLength: 7,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    target.value = normalizeCardExpiration(target.value);
  },
};

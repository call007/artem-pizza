import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { REG_EXP, Messages } from "../consts";
import { normalizeCardExpiration } from "../normalize";

export const cardExpiration: RegisterOptions = {
  pattern: {
    value: REG_EXP.cardExpiration,
    message: Messages.CardExpiration,
  },
  maxLength: 7,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { value } = target;
    target.value = normalizeCardExpiration(value);
  },
};

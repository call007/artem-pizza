import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { MESSAGES, REG_EXP } from "../consts";
import { normalizeCardExpiration } from "../normalize";

export const cardExpiration: Pick<
  RegisterOptions,
  "pattern" | "maxLength" | "onChange"
> = {
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

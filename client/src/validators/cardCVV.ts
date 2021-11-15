import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { normalizeNumber } from "../normalize";
import { MESSAGES } from "../consts";

export const cardCVV: Pick<
  RegisterOptions,
  "minLength" | "maxLength" | "onChange"
> = {
  minLength: {
    value: 3,
    message: MESSAGES.CardCVV,
  },
  maxLength: 3,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    target.value = normalizeNumber(target.value).substr(0, 3);
  },
};

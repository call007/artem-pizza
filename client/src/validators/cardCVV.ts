import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { normalizeNumber } from "../normalize";
import { Messages } from "../consts";

export const cardCVV: RegisterOptions = {
  minLength: {
    value: 3,
    message: Messages.CardCVV,
  },
  maxLength: 3,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    target.value = normalizeNumber(target.value);
  },
};

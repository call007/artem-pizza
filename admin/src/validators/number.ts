import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";
import { normalizeNumber } from "../normalize";

export const number: Pick<RegisterOptions, "pattern" | "onChange"> = {
  pattern: {
    value: REG_EXP.number,
    message: MESSAGES.Number,
  },
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    target.value = normalizeNumber(target.value);
  },
};

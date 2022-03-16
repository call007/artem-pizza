import { RegisterOptions } from "react-hook-form";
import { MESSAGES, REG_EXP } from "../consts";

export const password: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.password,
    message: MESSAGES.Password,
  },
};

import { RegisterOptions } from "react-hook-form";
import { MESSAGES, REG_EXP } from "../consts";

export const email: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.email,
    message: MESSAGES.Email,
  },
};

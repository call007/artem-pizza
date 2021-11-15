import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const email: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.email,
    message: MESSAGES.Email,
  },
};

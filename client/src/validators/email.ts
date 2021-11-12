import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const email: RegisterOptions = {
  pattern: {
    value: REG_EXP.email,
    message: MESSAGES.Email,
  },
};

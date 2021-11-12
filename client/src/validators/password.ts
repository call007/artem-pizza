import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const password: RegisterOptions = {
  pattern: {
    value: REG_EXP.password,
    message: MESSAGES.Password,
  },
};

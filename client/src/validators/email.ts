import { RegisterOptions } from "react-hook-form";
import { REG_EXP, Messages } from "../consts";

export const email: RegisterOptions = {
  pattern: {
    value: REG_EXP.email,
    message: Messages.Email,
  },
};

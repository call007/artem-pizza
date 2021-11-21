import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const latin: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.latin,
    message: MESSAGES.Latin,
  },
};

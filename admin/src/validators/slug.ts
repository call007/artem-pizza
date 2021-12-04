import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const slug: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.slug,
    message: MESSAGES.Slug,
  },
};

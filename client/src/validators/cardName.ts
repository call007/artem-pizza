import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const cardName: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.cardName,
    message: MESSAGES.CardName,
  },
};

import { RegisterOptions } from "react-hook-form";
import { MESSAGES, REG_EXP } from "../consts";

export const cardName: Pick<RegisterOptions, "pattern"> = {
  pattern: {
    value: REG_EXP.cardName,
    message: MESSAGES.CardName,
  },
};

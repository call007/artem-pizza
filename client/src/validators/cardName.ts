import { RegisterOptions } from "react-hook-form";
import { REG_EXP, MESSAGES } from "../consts";

export const cardName: RegisterOptions = {
  pattern: {
    value: REG_EXP.cardName,
    message: MESSAGES.CardName,
  },
};

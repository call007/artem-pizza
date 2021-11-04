import { RegisterOptions } from "react-hook-form";
import { REG_EXP, Messages } from "../consts";

export const cardName: RegisterOptions = {
  pattern: {
    value: REG_EXP.cardName,
    message: Messages.CardName,
  },
};

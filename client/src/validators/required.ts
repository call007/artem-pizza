import { RegisterOptions } from "react-hook-form";
import { MESSAGES } from "../consts";

export const required: RegisterOptions = {
  required: {
    value: true,
    message: MESSAGES.Required,
  },
};

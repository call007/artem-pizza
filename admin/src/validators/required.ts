import { RegisterOptions } from "react-hook-form";
import { MESSAGES } from "../consts";

export const required: Pick<RegisterOptions, "required"> = {
  required: {
    value: true,
    message: MESSAGES.Required,
  },
};

import { RegisterOptions } from "react-hook-form";
import { Messages } from "../consts";

export const required: RegisterOptions = {
  required: {
    value: true,
    message: Messages.Required,
  },
};

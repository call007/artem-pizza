import { cardCVV } from "./cardCVV";
import { cardExpiration } from "./cardExpiration";
import { cardName } from "./cardName";
import { cardNumber } from "./cardNumber";
import { email } from "./email";
import { password } from "./password";
import { required } from "./required";

export const validators = {
  required,
  cardNumber,
  cardExpiration,
  cardCVV,
  cardName,
  email,
  password,
};

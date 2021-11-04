import { required } from "./required";
import { cardNumber } from "./cardNumber";
import { cardExpiration } from "./cardExpiration";
import { cardCVV } from "./cardCVV";
import { cardName } from "./cardName";
import { email } from "./email";
import { password } from "./password";

export function useValidators() {
  return {
    required,
    cardNumber,
    cardExpiration,
    cardCVV,
    cardName,
    email,
    password,
  };
}

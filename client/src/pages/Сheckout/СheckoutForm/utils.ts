import { PaymentSystem } from "../../../types";

export const getPaymentSystem = (value?: string) => {
  if (!value) return undefined;

  switch (value[0]) {
    case "4":
      return PaymentSystem.Visa;
    case "5":
      return PaymentSystem.Mastercard;
    default:
      return undefined;
  }
};

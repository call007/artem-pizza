export const getPaymentSystem = (value?: string) => {
  if (!value) return null;

  switch (value[0]) {
    case "4":
      return "Visa";
    case "5":
      return "MasterCard";
    default:
      return null;
  }
};

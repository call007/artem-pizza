export const cardNumberRegExp = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

export const isThisACardNumber = (candidate: string) =>
  cardNumberRegExp.test(candidate);

export const normalizeCardNumber = (value: string) =>
  value
    .replace(/[^0-9]/g, "")
    .match(/.{1,4}/g)
    ?.join(" ") || "";

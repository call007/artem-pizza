export const cardExpirationRegExp = /^[0-9]{2}\/[0-9]{4}$/;

export const isThisACardExpiration = (candidate: string) =>
  cardExpirationRegExp.test(candidate);

export const normalizeCardExpiration = (value: string) => {
  return value.replace(/[^0-9]/g, "").replace(/^(\d{2})(\d+)/, "$1/$2");
};

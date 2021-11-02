export const cardExpirationRegExp = /^[0-3][0-9]\/[0-9]{4}$/;

export const isThisACardExpiration = (candidate: string) =>
  candidate.replace(/[^0-9]/g, "").length === 6;

export const normalizeCardExpiration = (value: string) => {
  return value.replace(/[^0-9]/g, "").replace(/^(\d{2})(\d+)/, "$1/$2");
};

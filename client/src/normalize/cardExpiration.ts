export const normalizeCardExpiration = (value: string) => {
  if (value.length === 1 && +value > 3) {
    return "";
  }

  if (value.length === 2 && +value > 31) {
    return value.charAt(0);
  }

  return value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2})(\d+)/, "$1/$2")
    .substr(0, 7);
};

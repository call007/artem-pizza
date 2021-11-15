export const normalizeCardExpiration = (value: string): string => {
  if (+value[0] > 1) {
    return "";
  }

  if (+value.substr(0, 2) > 12) {
    return value.charAt(0);
  }

  return value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2})(\d+)/, "$1/$2")
    .substr(0, 7);
};

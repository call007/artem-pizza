export const normalizeNumber = (value: string) =>
  value.replace(/[^0-9]/g, "").substr(0, 3);

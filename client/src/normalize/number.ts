export const normalizeNumber = (value: string): string =>
  value.replace(/[^0-9]/g, "");

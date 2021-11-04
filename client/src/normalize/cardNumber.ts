export const normalizeCardNumber = (value: string) =>
  value
    .replace(/[^0-9]/g, "")
    .match(/.{1,4}/g)
    ?.join(" ")
    .substr(0, 19) || "";

type Action = {
  type: "SOME";
  [key: string]: string;
};

export const some = (value: string): Action => ({ type: "SOME", value });

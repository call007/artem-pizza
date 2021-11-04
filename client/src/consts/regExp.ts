export const REG_EXP = {
  cardName: /^[A-Z]+ [A-Z]+$/,
  cardNumber: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
  cardExpiration: /^[0-3][0-9]\/[0-9]{4}$/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\W]).{6,}/,
};

import { SubmitHandler, useForm } from "react-hook-form";
import { useValidators } from "../../hooks/useValidators";

type FormValues = {
  address: string;
  entrance?: string;
  floor?: string;
  apartment?: string;
  cardNumber?: string;
  cardExpiration?: string;
  cardCCV?: number;
  cardName?: string;
};

const getPaymentSystem = (value?: string) => {
  if (!value) return null;

  switch (value[0]) {
    case "4":
      return "Visa";
    case "5":
      return "MasterCard";
    default:
      return null;
  }
};

export function Сheckout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const { required, cardNumber, cardExpiration } = useValidators();

  const watchCardNumber = watch("cardNumber");
  const paymentSystem = getPaymentSystem(watchCardNumber);

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <h1>Оформление заказа</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Адрес доставки</legend>

          <ul role="none">
            <li>
              <input
                type="text"
                placeholder="Введите адрес"
                autoComplete="street-address"
                {...register("address", { required })}
              />
              {errors.address?.message}
            </li>

            <li>
              <label htmlFor="order-entrance">подъезд</label>{" "}
              <input
                {...register("entrance")}
                type="text"
                inputMode="decimal"
                id="order-entrance"
              />
            </li>

            <li>
              <label htmlFor="order-floor">этаж</label>{" "}
              <input
                {...register("floor")}
                type="text"
                inputMode="decimal"
                id="order-floor"
              />
            </li>

            <li>
              <label htmlFor="order-apartment">квартира</label>{" "}
              <input
                {...register("apartment")}
                type="number"
                id="order-apartment"
              />
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Данные для оплаты</legend>

          <ul role="none">
            <li>
              <input
                {...register("cardNumber", {
                  required,
                  ...cardNumber.register,
                })}
                type="text"
                placeholder="Номер карты"
                inputMode="decimal"
                autoComplete="cc-number"
                onKeyPress={cardNumber.onKeyPress}
              />
              {errors.cardNumber ? errors.cardNumber?.message : paymentSystem}
            </li>

            <li>
              <input
                {...register("cardExpiration", {
                  required,
                  ...cardExpiration.register,
                })}
                type="text"
                placeholder="MM/YYYY"
                inputMode="decimal"
                autoComplete="cc-exp"
                onKeyPress={cardExpiration.onKeyPress}
              />
              {errors.cardExpiration?.message}
            </li>

            <li>
              <input
                {...register("cardCCV", { required })}
                type="text"
                placeholder="CVV"
                inputMode="decimal"
                autoComplete="cc-csc"
              />
              {errors.cardCCV?.message}
            </li>

            <li>
              <input
                {...register("cardName", { required })}
                type="text"
                placeholder="Имя как на карте"
                autoComplete="cc-name"
              />
              {errors.cardName?.message}
            </li>
          </ul>

          <p>
            Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
            не бросает.
          </p>

          <button type="submit">Заполните форму заказа</button>
        </fieldset>
      </form>
    </div>
  );
}

import { SubmitHandler, useForm } from "react-hook-form";
import { useValidators } from "../../validators/useValidators";

type FormValues = {
  address: string;
  entrance: string;
  floor: string;
  apartment: string;
  cardNumber: string;
  cardExpiration: string;
  cardCCV: number;
  cardName: string;
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
  const { required, cardNumber, cardExpiration, cardCVV, cardName } =
    useValidators();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

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
                {...register("address", required)}
              />
              {errors.address?.message}
            </li>

            <li>
              <label htmlFor="order-entrance">подъезд</label>{" "}
              <input
                type="text"
                inputMode="decimal"
                id="order-entrance"
                {...register("entrance")}
              />
            </li>

            <li>
              <label htmlFor="order-floor">этаж</label>{" "}
              <input
                type="text"
                inputMode="decimal"
                id="order-floor"
                {...register("floor")}
              />
            </li>

            <li>
              <label htmlFor="order-apartment">квартира</label>{" "}
              <input
                type="text"
                id="order-apartment"
                {...register("apartment")}
              />
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Данные для оплаты</legend>

          <ul role="none">
            <li>
              <input
                type="text"
                placeholder="Номер карты"
                inputMode="decimal"
                autoComplete="cc-number"
                {...register("cardNumber", {
                  ...required,
                  ...cardNumber,
                })}
              />
              {errors.cardNumber?.message || paymentSystem}
            </li>

            <li>
              <input
                type="text"
                placeholder="MM/YYYY"
                inputMode="decimal"
                autoComplete="cc-exp"
                {...register("cardExpiration", {
                  ...required,
                  ...cardExpiration,
                })}
              />
              {errors.cardExpiration?.message}
            </li>

            <li>
              <input
                type="text"
                placeholder="CVV"
                inputMode="decimal"
                autoComplete="cc-csc"
                {...register("cardCCV", {
                  ...required,
                  ...cardCVV,
                })}
              />
              {errors.cardCCV?.message}
            </li>

            <li>
              <input
                type="text"
                placeholder="Имя как на карте"
                autoComplete="cc-name"
                {...register("cardName", { ...required, ...cardName })}
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

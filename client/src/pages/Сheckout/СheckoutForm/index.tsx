import { SubmitHandler, useForm } from "react-hook-form";
import { validators } from "../../../validators";

type FormValues = {
  address: string;
  entrance: string;
  floor: string;
  apartment: string;
  cardNumber: string;
  cardExpiration: string;
  cardCVV: number;
  cardName: string;
};

interface Props {
  formSubmit: (data: FormValues) => void;
}

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

export function СheckoutForm({ formSubmit }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const watchCardNumber = watch("cardNumber");
  const paymentSystem = getPaymentSystem(watchCardNumber);

  const onSubmit: SubmitHandler<FormValues> = (data) => formSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Адрес доставки</legend>

        <ul role="none">
          <li>
            <input
              type="text"
              placeholder="Введите адрес"
              autoComplete="street-address"
              {...register("address", validators.required)}
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
                ...validators.required,
                ...validators.cardNumber,
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
                ...validators.required,
                ...validators.cardExpiration,
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
              {...register("cardCVV", {
                ...validators.required,
                ...validators.cardCVV,
              })}
            />
            {errors.cardCVV?.message}
          </li>

          <li>
            <input
              type="text"
              placeholder="Имя как на карте"
              autoComplete="cc-name"
              {...register("cardName", {
                ...validators.required,
                ...validators.cardName,
              })}
            />
            {errors.cardName?.message}
          </li>
        </ul>
      </fieldset>

      <p>
        Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер не
        бросает.
      </p>

      <button type="submit">Отправить</button>
    </form>
  );
}

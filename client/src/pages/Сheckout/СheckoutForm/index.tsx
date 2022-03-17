import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as MasterCardIcon } from "../../../images/mastercard.svg";
import { ReactComponent as VisaIcon } from "../../../images/visa.svg";
import { useThemeContext } from "../../../context";
import { PaymentSystem } from "../../../types";
import { Input, Typography } from "../../../ui-kit";
import { getPaymentSystem } from "../../../utils";
import { validators } from "../../../validators";
import * as Styled from "./styles";

export type FormValues = {
  address: string;
  entrance: string;
  floor: string;
  apartment: string;
  card_number: string;
  card_expiration: string;
  card_CVV: number;
  name: string;
};

interface Props {
  onFormSubmit?: (data: FormValues) => void;
  onCardNumberChange?: (value: string) => void;
}

export function СheckoutForm({ onFormSubmit, onCardNumberChange }: Props) {
  const { theme } = useThemeContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const watchCardNumber = watch("card_number");
  const paymentSystem = getPaymentSystem(watchCardNumber);

  const onSubmit: SubmitHandler<FormValues> = (data) => onFormSubmit?.(data);

  return (
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <Styled.Fieldset>
        <Typography
          size={{ all: "lg", phone: "base" }}
          weight="medium"
          component="legend"
        >
          Адрес доставки
        </Typography>

        <Styled.Box>
          <Input
            type="text"
            id="address"
            placeholder="Введите адрес"
            autoComplete="street-address"
            errorMessage={errors.address?.message}
            {...register("address", validators.required)}
          />
        </Styled.Box>

        <Styled.ExtraAddressBox>
          <Input
            label="подъезд"
            type="text"
            inputMode="decimal"
            id="order-entrance"
            size="sm"
            {...register("entrance")}
          />

          <Input
            label="этаж"
            type="text"
            inputMode="decimal"
            id="order-floor"
            size="sm"
            {...register("floor")}
          />

          <Input
            label="квартира"
            type="text"
            id="order-apartment"
            size="sm"
            {...register("apartment")}
          />
        </Styled.ExtraAddressBox>
      </Styled.Fieldset>

      <Styled.Separator />

      <Styled.Fieldset>
        <Typography
          size={{ all: "lg", phone: "base" }}
          weight="medium"
          component="legend"
        >
          Данные для оплаты
        </Typography>

        <Styled.Box>
          <Styled.Payment>
            <Input
              type="text"
              id="card_number"
              placeholder="Номер карты"
              inputMode="decimal"
              autoComplete="cc-number"
              errorMessage={errors.card_number?.message}
              icon={
                <>
                  {paymentSystem === PaymentSystem.Mastercard && (
                    <Styled.PaymentIcon
                      as={MasterCardIcon}
                      aria-label={PaymentSystem.Mastercard}
                    />
                  )}
                  {paymentSystem === PaymentSystem.Visa && (
                    <Styled.PaymentIcon
                      as={VisaIcon}
                      aria-label={PaymentSystem.Visa}
                      themeName={theme}
                    />
                  )}
                </>
              }
              {...register("card_number", {
                ...validators.required,
                ...validators.cardNumber(onCardNumberChange),
              })}
            />
          </Styled.Payment>
        </Styled.Box>

        <Styled.ExpirationCVVBox>
          <Input
            type="text"
            id="card_expiration"
            placeholder="MM/YYYY"
            inputMode="decimal"
            autoComplete="cc-exp"
            errorMessage={errors.card_expiration?.message}
            {...register("card_expiration", {
              ...validators.required,
              ...validators.cardExpiration,
            })}
          />

          <Input
            type="text"
            id="card_CVV"
            placeholder="CVV"
            inputMode="decimal"
            autoComplete="cc-csc"
            errorMessage={errors.card_CVV?.message}
            {...register("card_CVV", {
              ...validators.required,
              ...validators.cardCVV,
            })}
          />
        </Styled.ExpirationCVVBox>

        <Styled.Box>
          <Input
            type="text"
            id="name"
            placeholder="Имя как на карте"
            autoComplete="cc-name"
            errorMessage={errors.name?.message}
            {...register("name", {
              ...validators.required,
              ...validators.cardName,
            })}
          />
        </Styled.Box>
      </Styled.Fieldset>

      <Styled.Separator />

      <Typography
        size={{ all: "base", phone: "sm" }}
        color={(color) => color.gray600}
      >
        Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер не
        бросает.
      </Typography>
    </form>
  );
}

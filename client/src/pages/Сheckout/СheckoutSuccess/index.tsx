import { SvgIcon, Typography, Wrapper } from "../../../ui-kit";
import { CheckoutHeader } from "../CheckoutHeader";
import { OrderPreview } from "../OrderPreview";
import * as Styled from "./styles";

interface СheckoutSuccessProps {
  price: number;
  date: string;
  cardNumber?: string;
}

export function СheckoutSuccess({
  price,
  cardNumber,
  date,
}: СheckoutSuccessProps) {
  return (
    <>
      <CheckoutHeader />

      <Wrapper size="sm" as="main">
        <Styled.Container>
          <Styled.SuccessIcon>
            <SvgIcon src="check" size={35} />
          </Styled.SuccessIcon>

          <Typography
            size={{ all: "xl", phone: "lg" }}
            weight="medium"
            as={Styled.Title}
          >
            Спасибо за заказ!
          </Typography>

          <Typography
            size={{ all: "lg", phone: "base" }}
            color={(color) => color.gray600}
          >
            Заказ успешно оплачен, ждите вашу пиццу уже через час
          </Typography>
        </Styled.Container>

        <OrderPreview price={price} cardNumber={cardNumber} date={date} />
      </Wrapper>
    </>
  );
}

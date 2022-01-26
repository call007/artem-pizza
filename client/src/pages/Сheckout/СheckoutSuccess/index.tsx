import { SvgIcon, Typography, Wrapper } from "../../../ui-kit";
import { CheckoutHeader } from "../CheckoutHeader";
import { OrderPreview } from "../OrderPreview";
import * as Styled from "./styles";

interface СheckoutSuccessProps {
  price: number;
  cardNumber?: string;
}

export function СheckoutSuccess({ price, cardNumber }: СheckoutSuccessProps) {
  return (
    <>
      <CheckoutHeader />

      <Wrapper size="sm" as="main">
        <Styled.Container>
          <Styled.SuccessIcon>
            <SvgIcon src="check" size={35} />
          </Styled.SuccessIcon>

          <Styled.TitleBox>
            <Typography
              size={{ all: "xl", phone: "lg" }}
              weight="medium"
              component="h2"
            >
              Спасибо за заказ!
            </Typography>
          </Styled.TitleBox>

          <Typography
            size={{ all: "lg", phone: "base" }}
            color={(color) => color.gray600}
          >
            Заказ успешно оплачен, ждите вашу пиццу уже через час
          </Typography>
        </Styled.Container>

        <OrderPreview price={price} cardNumber={cardNumber} />
      </Wrapper>
    </>
  );
}

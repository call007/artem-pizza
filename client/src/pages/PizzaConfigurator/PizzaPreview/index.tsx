import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { PATH } from "../../../consts";
import { useMediaPhone } from "../../../hooks";
import { getPizza, getPizzaPrice } from "../../../state/order/selectors";
import { Button, Typography, TypographySkeleton } from "../../../ui-kit";
import { Pizza } from "../Pizza";
import { SelectedIngredients } from "../SelectedIngredients";
import * as Styled from "./styles";

interface PizzaPreviewProps {
  isLoading?: boolean;
}

export function PizzaPreview({ isLoading }: PizzaPreviewProps) {
  const pizza = useSelector(getPizza);
  const price = useSelector(getPizzaPrice);

  const isPhone = useMediaPhone();

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  return (
    <>
      <Styled.Pizza>
        <Pizza />
      </Styled.Pizza>

      <Styled.TitleBox>
        <Typography
          size={{ all: "xl", phone: "lg" }}
          weight="medium"
          component="h2"
        >
          {isLoading ? <TypographySkeleton width="8.125rem" /> : "Твоя пицца"}
        </Typography>
      </Styled.TitleBox>

      <SelectedIngredients isLoading={isLoading} />

      {!isPhone && (
        <Styled.ButtonBox>
          <Button
            type="submit"
            form="configurator-form"
            size="large"
            isLoading={isLoading || !price}
          >
            Заказать за {price} руб
          </Button>
        </Styled.ButtonBox>
      )}
    </>
  );
}

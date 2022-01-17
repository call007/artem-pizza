import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { PATH } from "../../../consts";
import { useMediaPhone } from "../../../hooks";
import { getPizza, getPizzaPrice } from "../../../state/order/selectors";
import { Button, Typography } from "../../../ui-kit";
import { Pizza } from "../Pizza";
import { SelectedIngredients } from "../SelectedIngredients";
import * as Styled from "./styles";

export function PizzaPreview() {
  const pizza = useSelector(getPizza);
  const price = useSelector(getPizzaPrice);

  const isPhone = useMediaPhone();

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  return (
    <Styled.Container>
      <Styled.Pizza>
        <Pizza />
      </Styled.Pizza>

      <Styled.TitleBox>
        <Typography
          size={{ all: "xl", phone: "lg" }}
          weight="medium"
          component="h2"
        >
          Твоя пицца
        </Typography>
      </Styled.TitleBox>

      <SelectedIngredients />

      {!isPhone && (
        <Styled.ButtonBox>
          <Button type="submit" form="configurator-form" size="large">
            Заказать за {price} руб
          </Button>
        </Styled.ButtonBox>
      )}
    </Styled.Container>
  );
}

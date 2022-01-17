import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPizzaPrice } from "../../../state/order/selectors";
import { Button, Typography } from "../../../ui-kit";
import { Pizza } from "../Pizza";
import { SelectedIngredients } from "../SelectedIngredients";
import * as Styled from "./styles";

export function MobilePizzaPreview() {
  const price = useSelector(getPizzaPrice);
  const [isVisiblePizzaInfo, setIsVisiblePizzaInfo] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsVisiblePizzaInfo(window.pageYOffset > 300 ? true : false);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Styled.Container>
      {isVisiblePizzaInfo && (
        <Styled.Wrapper>
          <Styled.Summary>
            <Typography weight="medium">Твоя пицца</Typography>

            <Styled.Box>
              <SelectedIngredients />
            </Styled.Box>
          </Styled.Summary>

          <Styled.PizzaWrapper>
            <Styled.Pizza>
              <Pizza />
            </Styled.Pizza>
          </Styled.PizzaWrapper>
        </Styled.Wrapper>
      )}

      <Button type="submit" form="configurator-form" size="large" isLong={true}>
        Заказать за {price} руб
      </Button>
    </Styled.Container>
  );
}

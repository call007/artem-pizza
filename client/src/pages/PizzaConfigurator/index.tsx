import { useSelector } from "react-redux";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import {
  getIngredientsError,
  getIngredientsIsLoading,
} from "../../state/ingredients/selectors";
import { Button, Header, Typography, Wrapper } from "../../ui-kit";
import { ConfiguratorForm } from "./ConfiguratorForm";
import { MobilePizzaPreview } from "./MobilePizzaPreview";
import { PizzaPreview } from "./PizzaPreview";
import * as Styled from "./styles";

export function PizzaConfigurator() {
  const isLoading = useSelector(getIngredientsIsLoading);
  const errorMessage = useSelector(getIngredientsError);
  const isPhone = useMediaPhone();

  return (
    <>
      <Styled.WhiteBodyBg />

      <Header>
        <Button to={PATH.Orders} view="ghost" icon="account">
          {!isPhone && "Мои заказы"}
        </Button>
      </Header>

      <Wrapper size="base" as="main">
        {isPhone && (
          <Typography size="xl" weight="bold" component="h1">
            Собери свою пиццу
          </Typography>
        )}

        <Styled.Container>
          <Styled.Content>
            {!isPhone && (
              <Typography size="xxl" weight="bold" component="h1">
                Собери свою пиццу
              </Typography>
            )}

            <ConfiguratorForm
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          </Styled.Content>

          <Styled.Sidebar>
            <PizzaPreview isLoading={isLoading || !!errorMessage} />
          </Styled.Sidebar>
        </Styled.Container>
      </Wrapper>

      {isPhone && (
        <MobilePizzaPreview isLoading={isLoading || !!errorMessage} />
      )}
    </>
  );
}

import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { Button, Header, Typography, Wrapper } from "../../ui-kit";
import { ConfiguratorForm } from "./ConfiguratorForm";
import { MobilePizzaPreview } from "./MobilePizzaPreview";
import { PizzaPreview } from "./PizzaPreview";
import * as Styled from "./styles";

export function PizzaConfigurator() {
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
          <ConfiguratorForm />
          <PizzaPreview />
        </Styled.Container>
      </Wrapper>

      {isPhone && <MobilePizzaPreview />}
    </>
  );
}

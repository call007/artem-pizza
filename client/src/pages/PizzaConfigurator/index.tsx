import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { Button, Header } from "../../ui-kit";
import { Typography } from "../../ui-kit/Typography";
import { ConfiguratorForm } from "./ConfiguratorForm";

export function PizzaConfigurator() {
  const isPhone = useMediaPhone();

  return (
    <>
      <Header>
        <Button to={PATH.Orders} view="ghost" icon="account">
          {!isPhone && "Мои заказы"}
        </Button>
      </Header>

      <Typography size="2xl" weight="bold">
        Собери свою пиццу
      </Typography>
      <ConfiguratorForm />
    </>
  );
}

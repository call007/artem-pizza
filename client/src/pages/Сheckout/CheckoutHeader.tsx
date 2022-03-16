import { PATH } from "../../consts";
import { Button, Header } from "../../ui-kit";

export function CheckoutHeader() {
  return (
    <Header title="Оформление заказа">
      <Button to={PATH.PizzaConfigurator} view="ghost" icon="error" />
    </Header>
  );
}

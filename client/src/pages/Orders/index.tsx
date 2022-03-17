import { useHistory } from "react-router";
import { useAuth } from "../../context";
import { useMediaPhone } from "../../hooks";
import { Button, Header, Wrapper } from "../../ui-kit";
import { OrderList } from "./OrderList";

export function Orders() {
  const history = useHistory();
  const isPhone = useMediaPhone();
  const { logout, isLoggedIn } = useAuth();

  return (
    <>
      <Header title="Мои заказы">
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>

        <Button
          onClick={logout}
          view="ghost"
          icon="logout"
          isDisabled={!isLoggedIn}
        >
          {!isPhone && "Выйти"}
        </Button>
      </Header>

      <Wrapper size="sm">
        <OrderList />
      </Wrapper>
    </>
  );
}

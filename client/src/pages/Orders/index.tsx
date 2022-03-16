import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useMediaPhone } from "../../hooks";
import { getIsAuthorized } from "../../state/user/selectors";
import { Button, Header, Wrapper } from "../../ui-kit";
import { OrderList } from "./OrderList";

export function Orders() {
  const history = useHistory();
  const isPhone = useMediaPhone();
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <>
      <Header title="Мои заказы">
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>

        <Button view="ghost" icon="logout" isDisabled={!isAuthorized}>
          {!isPhone && "Выйти"}
        </Button>
      </Header>

      <Wrapper size="sm">
        <OrderList />
      </Wrapper>
    </>
  );
}

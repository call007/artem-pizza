import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { PATH } from "../../consts";
import { getIsCheckoutSuccess } from "../../state/user/selectors";

export function СheckoutSuccess() {
  const isCheckoutSuccess = useSelector(getIsCheckoutSuccess);

  if (!isCheckoutSuccess) {
    return <Redirect to={PATH.Checkout} />;
  }

  return (
    <div>
      <h1>Оформление заказа</h1>
      <h2>Спасибо за заказ!</h2>
      <p>Заказ успешно оплачен, ждите вашу пиццу уже через час</p>
    </div>
  );
}

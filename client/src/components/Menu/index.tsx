import { Link } from "react-router-dom";
import { PATH } from "../../consts";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PATH.PizzaConfigurator}>Конфигуратор пиццы</Link>
        </li>
        <li>
          <Link to={PATH.PizzaPreview}>Превью пиццы</Link>
        </li>
        <li>
          <Link to={PATH.Login}>Авторизация</Link>
        </li>
        <li>
          <Link to={PATH.Signup}>Регистрация</Link>
        </li>
        <li>
          <Link to={PATH.Checkout}>Оформление заказа</Link>
        </li>
        <li>
          <Link to={PATH.CheckoutSuccess}>Оформление заказа (успех)</Link>
        </li>
        <li>
          <Link to={PATH.Orders}>Мои заказы</Link>
        </li>
      </ul>
    </nav>
  );
}

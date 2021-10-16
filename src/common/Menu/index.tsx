import { Link } from "react-router-dom";
import { Path } from "../../types";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Path.HOME}>Конфигуратор</Link>
        </li>
        <li>
          <Link to={Path.LOGIN}>Авторизация</Link>
        </li>
        <li>
          <Link to={Path.SIGNUP}>Регистрация</Link>
        </li>
        <li>
          <Link to={Path.CHECKOUT}>Оформление заказа</Link>
        </li>
        <li>
          <Link to={Path.CHECKOUT_SUCCESS}>Оформление заказа (успех)</Link>
        </li>
        <li>
          <Link to={Path.ORDERS}>Мои заказы</Link>
        </li>
      </ul>
    </nav>
  );
}

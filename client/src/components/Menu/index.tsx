import { Link } from "react-router-dom";
import { Path } from "../../consts";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Path.PizzaConfigurator}>Конфигуратор пиццы</Link>
        </li>
        <li>
          <Link to={Path.PizzaPreview}>Превью пиццы</Link>
        </li>
        <li>
          <Link to={Path.Login}>Авторизация</Link>
        </li>
        <li>
          <Link to={Path.Signup}>Регистрация</Link>
        </li>
        <li>
          <Link to={Path.Checkout}>Оформление заказа</Link>
        </li>
        <li>
          <Link to={Path.CheckoutSuccess}>Оформление заказа (успех)</Link>
        </li>
        <li>
          <Link to={Path.Orders}>Мои заказы</Link>
        </li>
      </ul>
    </nav>
  );
}

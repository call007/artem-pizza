import { Link } from "react-router-dom";
import { Pages } from "../../types";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Pages.HOME}>Конфигуратор</Link>
        </li>
        <li>
          <Link to={Pages.LOGIN}>Авторизация</Link>
        </li>
        <li>
          <Link to={Pages.SIGNUP}>Регистрация</Link>
        </li>
      </ul>
    </nav>
  );
}

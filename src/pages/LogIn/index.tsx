import { Link } from "react-router-dom";
import { Path } from "../../types";

export function LogIn() {
  return (
    <div>
      <h1>Авторизация</h1>

      <form>
        <ul role="none">
          <li>
            <label htmlFor="login-email">E-mail</label>{" "}
            <input type="email" id="login-email" name="email" required />
          </li>

          <li>
            <label htmlFor="login-password">Пароль</label>{" "}
            <input
              type="password"
              id="login-password"
              name="password"
              required
            />
          </li>
        </ul>

        <button type="submit">Войти</button>

        <p>
          Если вы не зарегистрированы{" "}
          <Link to={Path.Signup}>пройдите регистрацию</Link>
        </p>
      </form>
    </div>
  );
}

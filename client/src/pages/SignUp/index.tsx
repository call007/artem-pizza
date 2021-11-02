import { Link } from "react-router-dom";
import { Path } from "../../types";

export function SignUp() {
  return (
    <div>
      <h1>Регистрация</h1>

      <form>
        <ul role="none">
          <li>
            <label htmlFor="signup-email">E-mail</label>{" "}
            <input type="email" id="signup-email" name="email" required />
          </li>

          <li>
            <label htmlFor="login-password">Пароль</label>{" "}
            <input
              type="password"
              id="signup-password"
              name="password"
              required
            />
          </li>

          <li>
            <label htmlFor="login-password">Подтвердите пароль</label>{" "}
            <input
              type="password"
              id="signup-password"
              name="password"
              required
            />
          </li>
        </ul>

        <button type="submit">Зарегистрироваться</button>

        <p>
          Если вы уже зарегистрированы{" "}
          <Link to={Path.Login}>авторизуйтесь</Link>
        </p>
      </form>
    </div>
  );
}

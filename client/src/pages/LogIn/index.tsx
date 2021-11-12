import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { LogInForm } from "./LogInForm";

export function LogIn() {
  return (
    <div>
      <h1>Авторизация</h1>

      <LogInForm formSubmit={(data) => console.log(data)} />

      <p>
        Если вы не зарегистрированы{" "}
        <Link to={PATH.Signup}>пройдите регистрацию</Link>
      </p>
    </div>
  );
}

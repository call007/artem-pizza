import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { SignUpForm } from "./SignUpForm";

export function SignUp() {
  return (
    <div>
      <h1>Регистрация</h1>

      <SignUpForm formSubmit={(data) => console.log(data)} />

      <p>
        Если вы уже зарегистрированы <Link to={PATH.Login}>авторизуйтесь</Link>
      </p>
    </div>
  );
}

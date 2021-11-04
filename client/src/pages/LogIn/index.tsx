import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Path } from "../../consts";
import { useValidators } from "../../validators/useValidators";

type FormValues = {
  email: string;
  password: string;
};

export function LogIn() {
  const { required, email } = useValidators();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <h1>Авторизация</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ul role="none">
          <li>
            <label htmlFor="login-email">E-mail</label>
            <input
              type="text"
              id="login-email"
              inputMode="email"
              autoComplete="username"
              {...register("email", { ...required, ...email })}
            />
            {errors.email?.message}
          </li>

          <li>
            <label htmlFor="login-password">Пароль</label>
            <input
              type="password"
              id="login-password"
              autoComplete="current-password"
              {...register("password", { ...required })}
            />
            {errors.password?.message}
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

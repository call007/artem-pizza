import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Messages, Path } from "../../consts";
import { useValidators } from "../../validators/useValidators";

type FormValues = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export function SignUp() {
  const { required, email, password } = useValidators();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const watchPassword = watch("password");

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ul role="none">
          <li>
            <label htmlFor="signup-email">E-mail</label>
            <input
              type="text"
              id="signup-email"
              inputMode="email"
              autoComplete="username"
              {...register("email", { ...required, ...email })}
            />
            {errors.email?.message}
          </li>

          <li>
            <label htmlFor="signup-password">Пароль</label>
            <input
              type="password"
              id="signup-password"
              autoComplete="new-password"
              {...register("password", { ...required, ...password })}
            />
            {errors.password?.message}
          </li>

          <li>
            <label htmlFor="signup-password-repeat">Подтвердите пароль</label>
            <input
              type="password"
              id="signup-password-repeat"
              autoComplete="new-password"
              {...register("passwordRepeat", {
                ...required,
                ...password,
                validate: (value) =>
                  value === watchPassword || Messages.PasswordMismatch,
              })}
            />
            {errors.passwordRepeat?.message}
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

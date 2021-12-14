import { SubmitHandler, useForm } from "react-hook-form";
import { validators } from "../../../validators";

export type FormValues = {
  email: string;
  password: string;
};

interface Props {
  formSubmit: (data: FormValues) => void;
}

export function LogInForm({ formSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => formSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul role="none">
        <li>
          <label htmlFor="login-email">E-mail</label>
          <input
            type="text"
            id="login-email"
            inputMode="email"
            autoComplete="username"
            {...register("email", {
              ...validators.required,
              ...validators.email,
            })}
          />
          {errors.email?.message}
        </li>

        <li>
          <label htmlFor="login-password">Пароль</label>
          <input
            type="password"
            id="login-password"
            autoComplete="current-password"
            {...register("password", { ...validators.required })}
          />
          {errors.password?.message}
        </li>
      </ul>

      <button type="submit">Войти</button>
    </form>
  );
}

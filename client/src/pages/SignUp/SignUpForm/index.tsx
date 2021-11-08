import { SubmitHandler, useForm } from "react-hook-form";
import { Messages } from "../../../consts";
import { useValidators } from "../../../validators";

type FormValues = {
  email: string;
  password: string;
  passwordRepeat: string;
};

interface Props {
  formSubmit: (data: FormValues) => void;
}

export function SignUpForm({ formSubmit }: Props) {
  const { required, email, password } = useValidators();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const watchPassword = watch("password");

  const onSubmit: SubmitHandler<FormValues> = (data) => formSubmit(data);

  return (
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
    </form>
  );
}

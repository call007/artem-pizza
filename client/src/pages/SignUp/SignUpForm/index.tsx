import { SubmitHandler, useForm } from "react-hook-form";
import { MESSAGES } from "../../../consts";
import { Button, Input } from "../../../ui-kit";
import { validators } from "../../../validators";
import * as Styled from "./styles";

export type FormValues = {
  email: string;
  password: string;
  passwordRepeat: string;
};

interface Props {
  formSubmit: (data: FormValues) => void;
}

export function SignUpForm({ formSubmit }: Props) {
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
      <Styled.Box>
        <Input
          label="E-mail"
          type="text"
          id="signup-email"
          inputMode="email"
          autoComplete="username"
          errorMessage={errors.email?.message}
          {...register("email", {
            ...validators.required,
            ...validators.email,
          })}
        />
      </Styled.Box>

      <Styled.Box>
        <Input
          label="Пароль"
          type="password"
          id="signup-password"
          autoComplete="new-password"
          errorMessage={errors.password?.message}
          {...register("password", {
            ...validators.required,
            ...validators.password,
          })}
        />
      </Styled.Box>

      <Styled.Box>
        <Input
          label="Подтвердите пароль"
          type="password"
          id="signup-password-repeat"
          autoComplete="new-password"
          errorMessage={errors.passwordRepeat?.message}
          {...register("passwordRepeat", {
            ...validators.required,
            ...validators.password,
            validate: (value) =>
              value === watchPassword || MESSAGES.PasswordMismatch,
          })}
        />
      </Styled.Box>

      <Button type="submit" size="large" isLong={true}>
        Зарегистрироваться
      </Button>
    </form>
  );
}

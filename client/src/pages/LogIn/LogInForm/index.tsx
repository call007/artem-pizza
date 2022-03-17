import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../ui-kit";
import { validators } from "../../../validators";
import * as Styled from "./styles";

export type FormValues = {
  email: string;
  password: string;
};

interface Props {
  isLoading?: boolean;
  onFormSubmit?: (data: FormValues) => void;
}

export function LogInForm({ isLoading, onFormSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<FormValues> = (data) => onFormSubmit?.(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Box>
        <Input
          label="E-mail"
          type="text"
          defaultValue="example@email.com"
          id="login-email"
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
          defaultValue="password"
          id="login-password"
          autoComplete="current-password"
          errorMessage={errors.password?.message}
          {...register("password", { ...validators.required })}
        />
      </Styled.Box>

      <Button type="submit" size="large" isLong={true} isLoading={isLoading}>
        Войти
      </Button>
    </form>
  );
}

import { useState } from "react";
import { useHistory } from "react-router";
import { PATH } from "../../consts";
import { useAuth } from "../../context";
import { useMediaPhone } from "../../hooks";
import {
  Button,
  Header,
  Plate,
  Typography,
  TypographyLink,
  Wrapper,
} from "../../ui-kit";
import { FormValues, SignUpForm } from "./SignUpForm";
import * as Styled from "./styles";

export function SignUp() {
  const { logout, isLoggedIn } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const isPhone = useMediaPhone();

  const isVisibleNote = isSubmitted && isLoggedIn;

  const handleSubmit = (data: FormValues) => {
    setIsSubmitted(true);
    console.log(data);
    alert(
      "Форма регистрации не реализована. Попробуйте авторизоваться с изначально заполненными системой данными."
    );
  };

  return (
    <>
      <Header title="Регистрация">
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>

        <Button
          onClick={logout}
          view="ghost"
          icon="logout"
          isDisabled={!isLoggedIn}
        >
          {!isPhone && "Выйти"}
        </Button>
      </Header>

      <Wrapper size="sm">
        <Plate as={Styled.Plate}>
          {isVisibleNote && (
            <>
              <Typography>
                Вы успешно зарегистрировались и автоматически авторизовались
              </Typography>

              <Styled.Footer>
                <Button view="secondary" to={PATH.PizzaConfigurator}>
                  На главную
                </Button>
              </Styled.Footer>
            </>
          )}

          {!isVisibleNote && (
            <>
              <SignUpForm onFormSubmit={handleSubmit} />

              <Styled.Footer>
                <Typography>
                  Если вы уже зарегистрированы{" "}
                  <TypographyLink to={PATH.Login}>авторизуйтесь</TypographyLink>
                </Typography>
              </Styled.Footer>
            </>
          )}
        </Plate>
      </Wrapper>
    </>
  );
}

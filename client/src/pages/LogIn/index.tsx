import { useHistory } from "react-router";
import { serverLogin } from "../../api";
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
import { FormValues, LogInForm } from "./LogInForm";
import * as Styled from "./styles";

export function LogIn() {
  const history = useHistory();
  const isPhone = useMediaPhone();
  const { login, logout, isLoggedIn } = useAuth();

  const handleSubmit = (data: FormValues) => {
    serverLogin(data.email, data.password)
      .then((data) => {
        login(data.token);
        history.push(PATH.Orders);
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  return (
    <>
      <Header title="Авторизация">
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
          {isLoggedIn && (
            <>
              <Typography>Вы успешно авторизовались.</Typography>

              <Styled.Footer>
                <Button view="secondary" to={PATH.Orders}>
                  Мои заказы
                </Button>
              </Styled.Footer>
            </>
          )}

          {!isLoggedIn && (
            <>
              <LogInForm onFormSubmit={handleSubmit} />

              <Styled.Footer>
                <Typography>
                  Если вы не зарегистрированы{" "}
                  <TypographyLink to={PATH.Signup}>
                    пройдите регистрацию
                  </TypographyLink>
                </Typography>
              </Styled.Footer>
            </>
          )}
        </Plate>
      </Wrapper>
    </>
  );
}

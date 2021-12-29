import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { getIsAuthorized } from "../../state/user/selectors";
import { userSlice } from "../../state/user/slice";
import { AppDispatch } from "../../store";
import { Button, Header } from "../../ui-kit";
import { FormValues, LogInForm } from "./LogInForm";

export function LogIn() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthorized = useSelector(getIsAuthorized);
  const history = useHistory();
  const isPhone = useMediaPhone();

  const handleSubmit = (data: FormValues) => {
    dispatch(userSlice.actions.setIsAuthorized(true));
    console.log(data);
  };

  return (
    <>
      <Header title="Авторизация">
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>

        <Button view="ghost" icon="logout" isDisabled={!isAuthorized}>
          {!isPhone && "Выйти"}
        </Button>
      </Header>

      {isAuthorized ? (
        <p>Вы успешно авторизовались.</p>
      ) : (
        <>
          <LogInForm formSubmit={handleSubmit} />

          <p>
            Если вы не зарегистрированы{" "}
            <Link to={PATH.Signup}>пройдите регистрацию</Link>
          </p>
        </>
      )}
    </>
  );
}

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { getIsAuthorized } from "../../state/user/selectors";
import { userSlice } from "../../state/user/slice";
import { AppDispatch } from "../../store";
import { Button, Header } from "../../ui-kit";
import { FormValues, SignUpForm } from "./SignUpForm";

export function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthorized = useSelector(getIsAuthorized);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const isPhone = useMediaPhone();

  const isVisibleNote = isSubmitted && isAuthorized;

  const handleSubmit = (data: FormValues) => {
    dispatch(userSlice.actions.setIsAuthorized(true));
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <div>
      <Header title="Регистрация">
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>

        <Button view="ghost" icon="logout" isDisabled={!isAuthorized}>
          {!isPhone && "Выйти"}
        </Button>
      </Header>

      {isVisibleNote ? (
        <p>Вы успешно зарегистрировались и автоматически авторизовались</p>
      ) : (
        <>
          <SignUpForm formSubmit={handleSubmit} />
          <p>
            Если вы уже зарегистрированы{" "}
            <Link to={PATH.Login}>авторизуйтесь</Link>
          </p>
        </>
      )}
    </div>
  );
}

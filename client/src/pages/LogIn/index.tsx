import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { setUserIsAuthorizedAction } from "../../state/user/actions";
import { getIsAuthorized } from "../../state/user/selectors";
import { AppDispatch } from "../../store";
import { FormValues, LogInForm } from "./LogInForm";

export function LogIn() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthorized = useSelector(getIsAuthorized);

  const handleSubmit = (data: FormValues) => {
    dispatch(setUserIsAuthorizedAction(true));
    console.log(data);
  };

  return (
    <div>
      <h1>Авторизация</h1>

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
    </div>
  );
}

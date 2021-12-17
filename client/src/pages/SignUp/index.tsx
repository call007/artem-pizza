import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { getIsAuthorized } from "../../state/user/selectors";
import { AppDispatch } from "../../store";
import { FormValues, SignUpForm } from "./SignUpForm";

export function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthorized = useSelector(getIsAuthorized);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isVisibleNote = isSubmitted && isAuthorized;

  const handleSubmit = (data: FormValues) => {
    dispatch({ type: "set_isAuthorized", payload: true });
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <div>
      {isVisibleNote ? (
        <p>Вы успешно зарегистрировались и автоматически авторизовались</p>
      ) : (
        <>
          <h1>Регистрация</h1>

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

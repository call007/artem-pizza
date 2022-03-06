import { MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { serverLogin } from "../../api";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const history = useHistory();
  const { login } = useAuth();

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    // example@email.com
    const email = event.currentTarget.email.value;
    // password
    const password = event.currentTarget.password.value;

    serverLogin(email, password)
      .then((data) => {
        login(data.token);
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

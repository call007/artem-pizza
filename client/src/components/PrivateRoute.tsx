import { Redirect, Route, RouteProps } from "react-router-dom";
import { PATH } from "../consts";
import { useAuth } from "../context";

interface Props extends RouteProps {
  redirectPath: PATH;
}

export function PrivateRoute({ redirectPath, ...restProps }: Props) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...restProps} /> : <Redirect to={redirectPath} />;
}

import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { PATH } from "../consts";
import { getIsAuthorized } from "../state/user/selectors";

interface Props extends RouteProps {
  redirectPath: PATH;
}

export function PrivateRoute({ redirectPath, ...restProps }: Props) {
  const isAuthorized = useSelector(getIsAuthorized);

  return isAuthorized ? (
    <Route {...restProps} />
  ) : (
    <Redirect to={redirectPath} />
  );
}

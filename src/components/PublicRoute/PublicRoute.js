import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({
  children,
  redirectTo = "/",
  restricted = false,
  ...props
}) => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = isLogged && restricted;

  return (
    <Route {...props}>
      {showRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;

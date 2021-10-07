import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ children, redirectTo = "/", ...props }) => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...props}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;

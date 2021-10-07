import { useSelector } from "react-redux";
import AppBar from "../components/AppBar/AppBar";
import AuthNav from "../components/AuthNav/AuthNav";
import ContactsMenu from "../components/ContactsMenu/ContactsMenu";
import UserMenu from "../components/UserMenu/UserMenu";
import authSelectors from "../redux/auth/auth-selectors";

import s from "./Navigation.module.css";

const Navigation = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.navigation}>
      <AppBar />
      {isLogged ? (
        <>
          {" "}
          <ContactsMenu />
          <UserMenu />{" "}
        </>
      ) : (
        <AuthNav />
      )}
    </nav>
  );
};

export default Navigation;

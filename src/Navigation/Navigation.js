import { useSelector } from "react-redux";
import AppBarLogo from "../components/AppBarLogo/AppBarLogo";
import AuthNav from "../components/AuthNav/AuthNav";
import ContactsMenu from "../components/ContactsMenu/ContactsMenu";
import UserMenu from "../components/UserMenu/UserMenu";
import authSelectors from "../redux/auth/auth-selectors";

import { AppBar, Toolbar } from "@mui/material";

const Navigation = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <AppBarLogo />
        {isLogged ? (
          <>
            {" "}
            <ContactsMenu />
            <UserMenu />{" "}
          </>
        ) : (
          <AuthNav />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

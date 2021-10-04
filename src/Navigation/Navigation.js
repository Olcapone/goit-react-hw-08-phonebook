import AppBar from "../components/AppBar/AppBar";
import AuthNav from "../components/AuthNav/AuthNav";
import UserMenu from "../components/UserMenu/UserMenu";

import s from "./Navigation.module.css";

const Navigation = () => (
  <nav className={s.navigation}>
    <AppBar />
    <AuthNav />
    <UserMenu />
  </nav>
);

export default Navigation;

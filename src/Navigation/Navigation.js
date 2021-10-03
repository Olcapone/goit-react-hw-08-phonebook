import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <div className={s.container}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Registration
      </NavLink>
    </div>
  </nav>
);

export default Navigation;

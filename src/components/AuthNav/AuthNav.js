import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => (
  <div>
    <Link to="/login" className={s.link}>
      Login
    </Link>
    <Link to="/register" className={s.link}>
      Registration
    </Link>
  </div>
);

export default AuthNav;

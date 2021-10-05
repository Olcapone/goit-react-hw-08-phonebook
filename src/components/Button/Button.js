import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

import s from "./Button.module.css";

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const handlerLogout = (e) => {
    if (e.target.textContent === "Exit") {
      console.log("worked");
      dispatch(authOperations.logout());
    }
  };

  return (
    <button type="submit" className={s.button} onClick={handlerLogout}>
      {name}
    </button>
  );
};

export default Button;

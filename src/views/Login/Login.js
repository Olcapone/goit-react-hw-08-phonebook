import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      dispatch(authOperations.login({ email, password }));
    }

    reset();
  };

  return (
    <div className={s.container}>
      {!isLogged && (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.formLabel}>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="email"
              className={s.formControl}
            />
          </label>
          <label className={s.formLabel}>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
              className={s.formControl}
            />
          </label>
          <Button name={"Login"} />
        </form>
      )}
    </div>
  );
};

export default Login;

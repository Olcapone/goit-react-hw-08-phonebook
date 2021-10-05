import { useState } from "react";

import Button from "../../components/Button/Button";
import s from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    reset();
  };

  return (
    <div className={s.container}>
      <form className={s.form}>
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
        <Button name={"Login"} onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;

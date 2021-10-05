import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import authOperations from "../../redux/auth/auth-operations";
import s from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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

    if (name !== "" && email !== "" && password !== "") {
      dispatch(authOperations.register({ name, email, password }));
    }

    reset();
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.formLabel}>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="name"
            className={s.formControl}
          />
        </label>
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

        <Button name={"Register"} />
      </form>
    </div>
  );
};

export default Register;

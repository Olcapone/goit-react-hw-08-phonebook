import s from "./Button.module.css";

const Button = ({ name }) => (
  <button type="submit" className={s.button}>
    {name}
  </button>
);

export default Button;

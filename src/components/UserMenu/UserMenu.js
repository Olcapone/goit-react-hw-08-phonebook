import Button from "../Button/Button";
import s from "./UserMenu.module.css";

const UserMenu = () => (
  <div className={s.container}>
    <p className={s.user}>Welcome!</p>
    <Button name={"Exit"} />
  </div>
);

export default UserMenu;

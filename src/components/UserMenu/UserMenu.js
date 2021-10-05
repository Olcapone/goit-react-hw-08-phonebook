import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <p className={s.user}>Welcome {name}!</p>
      <Button name={"Exit"} />
    </div>
  );
};

export default UserMenu;

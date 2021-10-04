import s from "./UserMenu.module.css";

const UserMenu = () => (
  <div className={s.container}>
    <p className={s.user}>Welcome!</p>
    <button className="button">EXIT</button>
  </div>
);

export default UserMenu;

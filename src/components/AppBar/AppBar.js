import { useHistory, useLocation } from "react-router";
import s from "./AppBar.module.css";

const AppBar = () => {
  const history = useHistory();
  const location = useLocation();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <h1 className={s.mainTitle} onClick={onGoBack}>
      <span className={s.logo}>P</span>honebook
    </h1>
  );
};

export default AppBar;

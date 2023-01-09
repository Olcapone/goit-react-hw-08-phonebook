import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const id = useSelector(authSelectors.getUserId);
  const dispatch = useDispatch();

  const handlerLogout = (e) => {
    e.preventDefault();
    dispatch(authOperations.logout({ id }));
  };

  return (
    <>
      <Typography sx={{ color: "primary.contrastText", mr: 1 }}>
        Welcome ${name}!
      </Typography>
      <Button type="submit" variant="contained" onClick={handlerLogout}>
        Exit
      </Button>
    </>
  );
};

export default UserMenu;

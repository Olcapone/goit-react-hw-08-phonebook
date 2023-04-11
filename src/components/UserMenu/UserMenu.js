import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const id = useSelector(authSelectors.getUserId);
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handlerLogout = (e) => {
    e.preventDefault();
    dispatch(authOperations.logout({ id }))
      .then(_ => navigation('/login'));
  };

  return (
    <>
      <Typography sx={{ color: "primary.contrastText", mr: 1 }}>
        Welcome ${email}!
      </Typography>
      <Button type="submit" variant="contained" onClick={handlerLogout}>
        Exit
      </Button>
    </>
  );
};

export default UserMenu;

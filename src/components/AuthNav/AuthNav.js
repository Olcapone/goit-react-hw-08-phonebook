import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AuthNav = () => (
  <>
    <Link to="/login">
      <Typography component="span" color="primary.contrastText" sx={{ mr: 2 }}>
        Login
      </Typography>
    </Link>
    <Link to="/register">
      <Typography component="span" color="primary.contrastText">
        Registration
      </Typography>
    </Link>
  </>
);

export default AuthNav;

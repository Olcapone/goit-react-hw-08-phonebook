import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const AppBarLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <Typography
      component="h1"
      sx={{ flexGrow: 1, color: "primary.contrastText", cursor: "pointer" }}
      onClick={onGoBack}
    >
      Phonebook
    </Typography>
  );
};

export default AppBarLogo;

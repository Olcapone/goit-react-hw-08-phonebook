import { useHistory, useLocation } from "react-router";
import { Typography } from "@mui/material";

const AppBarLogo = () => {
  const history = useHistory();
  const location = useLocation();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
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

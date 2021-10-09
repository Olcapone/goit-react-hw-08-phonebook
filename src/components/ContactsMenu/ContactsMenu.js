import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

const ContactsMenu = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Link to={`/contacts`}>
      {isLogged ? (
        <Typography component="span" color="#fff" sx={{ mr: 8 }}>
          {" "}
          My contacts
        </Typography>
      ) : (
        <Typography> Open your Phonebook</Typography>
      )}
    </Link>
  );
};

export default ContactsMenu;

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContactsMenu = () => {
  return (
    <Link to={`/contacts`}>
      <Typography component="span" color="#fff" sx={{ mr: 8 }}>
        My contacts
      </Typography>
    </Link>
  );
};

export default ContactsMenu;

import { Link } from "react-router-dom";
import s from "./ContactsMenu.module.css";

const ContactsMenu = () => {
  return (
    <Link to={`/contacts`} className={s.mainTitle}>
      My contacts
    </Link>
  );
};

export default ContactsMenu;

import { Link } from "react-router-dom";
import Title from "../Title/Title";

const ContactsMenu = () => {
  return (
    <Link to={`/contacts`}>
      <Title name={"My contacts"} />
    </Link>
  );
};

export default ContactsMenu;

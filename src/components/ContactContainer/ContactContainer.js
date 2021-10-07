import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import s from "./ContactContainer.module.css";
import { useSelector } from "react-redux";
import { getAllContact } from "../../redux/contacts/contacts-selectors";

const ContactContainer = () => {
  const contacts = useSelector(getAllContact);

  return (
    <section className={s.mainSection}>
      <ContactForm />
      {contacts.length !== 0 && <Filter />}
      <ContactList />
    </section>
  );
};

export default ContactContainer;

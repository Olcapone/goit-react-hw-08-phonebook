import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import { useSelector } from "react-redux";
import { getAllContact } from "../../redux/contacts/contacts-selectors";
import { Container, Typography } from "@mui/material";

const ContactContainer = () => {
  const contacts = useSelector(getAllContact);

  return (
    <Container
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 350,
      }}
    >
      {contacts.length === 0 && (
        <Typography
          component="h3"
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          There are no contacts here yet, let's add?
        </Typography>
      )}

      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default ContactContainer;

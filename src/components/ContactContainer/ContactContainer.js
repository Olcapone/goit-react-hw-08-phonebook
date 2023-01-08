import { useEffect } from "react";
import { isEmpty } from "lodash";
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact } from "../../redux/contacts/contacts-selectors";
import * as operations from "../../redux/contacts/contacts-operations";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

const ContactContainer = () => {
  const contacts = useSelector(getAllContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, []);

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
      {isEmpty(contacts) && (
        <Typography component="h3" sx={{ mt: 2, mb: 2 }}>
          There are no contacts here yet, let's add?
        </Typography>
      )}

      <ContactForm />
      {!isEmpty(contacts) && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default ContactContainer;

import { useEffect } from "react";
import { isEmpty } from "lodash";
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllTricks } from "../../redux/tricks/tricks-selectors";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { fetchTricks } from "../../redux/tricks/tricks-operations";

const ContactContainer = () => {
  const tricks = useSelector(getAllTricks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTricks());
  }, [dispatch]);

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
      {isEmpty(tricks) && (
        <Typography component="h3" sx={{ mt: 2, mb: 2 }}>
          There are no contacts here yet, let's add?
        </Typography>
      )}

      <ContactForm />
      {!isEmpty(tricks) && (
        <>
          {/*<Filter />*/}
          {/*<ContactList />*/}
        </>
      )}
    </Container>
  );
};

export default ContactContainer;

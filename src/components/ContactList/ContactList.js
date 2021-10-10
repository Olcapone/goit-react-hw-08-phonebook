import React, { useEffect } from "react";
import shortid from "shortid";
//=== redux
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as operations from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";

//=== styles
import { Button, List, ListItem, Typography } from "@mui/material";

function ContactList({ onDelete }) {
  const contact = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <>
      <Typography
        component="h2"
        sx={{ fontSize: 24, textAlign: "center", mb: 2, mt: 2 }}
      >
        Contacts
      </Typography>

      <List>
        {contact.map(({ name, number, id }) => (
          <ListItem
            key={shortid.generate()}
            sx={{
              justifyContent: "space-between",
              width: 320,
            }}
          >
            {name}:
            <Typography component="span" sx={{ mr: 1 }}>
              {number}
            </Typography>
            <Button
              type="button"
              onClick={() => onDelete(id)}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.entities,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

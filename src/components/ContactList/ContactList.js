import React, { useEffect } from "react";
import shortid from "shortid";
//=== redux
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getTricks } from "../../redux/tricks/tricks-selectors";

//=== styles
import { Button, List, ListItem, Typography } from "@mui/material";
import authSelectors from "../../redux/auth/auth-selectors";
import { deleteTrick, fetchTricks } from "../../redux/tricks/tricks-operations";

function ContactList({ onDelete }) {
  const tricks = useSelector(getTricks);
  const dispatch = useDispatch();
  const id = useSelector(authSelectors.getUserId);

  // add link for get trick by id
  useEffect(() => {
    dispatch(fetchTricks());
  }, [dispatch, id]);

  return (
    <>
      <Typography
        component="h2"
        sx={{ fontSize: 24, textAlign: "center", mb: 2, mt: 2 }}
      >
        Contacts
      </Typography>

      <List>
        {tricks.map(({ name, phone, id }) => (
          <ListItem
            key={shortid.generate()}
            sx={{
              justifyContent: "space-between",
              width: 320,
            }}
          >
            {name}:
            <Typography component="span" sx={{ mr: 1 }}>
              {phone}
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
  onDelete: (id) => dispatch(deleteTrick(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

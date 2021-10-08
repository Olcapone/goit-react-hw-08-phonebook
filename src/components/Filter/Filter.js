import { TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <TextField
      label="Find contacts by name"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      variant="standard"
      sx={{ mt: 2, width: 1 }}
    />
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import React from "react";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

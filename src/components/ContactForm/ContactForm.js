import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
//===redux
import { connect, useSelector } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
//===styles
import s from "./ContactForm.module.css";
import { getAllContact } from "../../redux/contacts/contacts-selectors";

function ContactForm({ onSubmit }) {
  const [stateName, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getAllContact);

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== 0) {
      if (name === "name") {
        setName(value);
      } else if (name === "number") {
        setNumber(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !contacts.find(
        (contact) => contact.name === stateName || contact.number === number
      )
    ) {
      onSubmit({ stateName, number });
    } else {
      toast.warning("Contact already exists!");
    }
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={stateName}
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit" onSubmit={reset}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  stateName: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ stateName, number }) =>
    dispatch(operations.addContacts({ stateName, number })), //=== call function with props
});

export default connect(null, mapDispatchToProps)(ContactForm);

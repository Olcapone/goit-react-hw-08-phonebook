import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormGroup, TextField, Button } from "@mui/material";
//===redux
import { useDispatch } from "react-redux";
//===styles
import { addTrick } from "../../redux/tricks/tricks-operations";

function ContactForm() {
  const [stateName, setName] = useState("");
  const [level, setLevel] = useState("");
  const [dynamic, setDynamic] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [power, setPower] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setLevel("");
    setDynamic("");
    setFlexibility("");
    setPower("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== 0) {
      if (name === "name") {
        setName(value);
      } else if (name === "level") {
        setLevel(value);
      }
      else if (name === "dynamic") {
        setDynamic(value);
      }
      else if (name === "flexibility") {
        setFlexibility(value);
      }
      else if (name === "power") {
        setPower(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTrick({ name: stateName, level, config: { dynamic, flexibility, power } }));
    reset();
  };

  return (
    <FormGroup>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={stateName}
          onChange={handleChange}
          variant="standard"
          sx={{ width: 1 }}
        />

        <TextField
          label="Level"
          type="text"
          name="level"
          required
          value={level}
          onChange={handleChange}
          variant="standard"
          sx={{ width: 1 }}
        />

        <TextField
          label="Dynamic"
          type="text"
          name="dynamic"
          required
          value={dynamic}
          onChange={handleChange}
          variant="standard"
          sx={{ width: 1 }}
        />

        <TextField
          label="Flexibility"
          type="text"
          name="flexibility"
          required
          value={flexibility}
          onChange={handleChange}
          variant="standard"
          sx={{ width: 1 }}
        />

        <TextField
          label="Power"
          type="text"
          name="power"
          required
          value={power}
          onChange={handleChange}
          variant="standard"
          sx={{ width: 1 }}
        />

        <Button
          type="submit"
          onSubmit={reset}
          variant="contained"
          sx={{ mt: 4 }}
        >
          Add contact
        </Button>
      </form>
    </FormGroup>
  );
}

ContactForm.propTypes = {
  stateName: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;

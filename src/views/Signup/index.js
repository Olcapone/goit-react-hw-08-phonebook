import { TextField, Container, Button, FormGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmpty(name) && !isEmpty(email) && !isEmpty(password)) {
      dispatch(authOperations.signup({ name, email, password }));
    }

    reset();
  };

  return (
    <Container
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!isLogged && (
        <FormGroup sx={{ maxWidth: 320 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              type="text"
              label="Name"
              value={name}
              onChange={handleChange}
              variant="standard"
              sx={{ width: 1 }}
            />

            <TextField
              name="email"
              type="email"
              label="Email"
              value={email}
              onChange={handleChange}
              variant="standard"
              sx={{ width: 1 }}
            />

            <TextField
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={handleChange}
              variant="standard"
              sx={{ width: 1 }}
            />

            <Button
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              variant="contained"
              sx={{
                mt: 2,
              }}
            >
              Register
            </Button>
          </form>
        </FormGroup>
      )}
    </Container>
  );
};

export default Signup;

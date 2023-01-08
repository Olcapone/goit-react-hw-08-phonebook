import { Button, Container, FormGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    if (email !== "" && password !== "") {
      dispatch(authOperations.login({ email, password }));
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
        <FormGroup sx={{ maxWidth: 350 }}>
          <form onSubmit={handleSubmit}>
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
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>
        </FormGroup>
      )}
    </Container>
  );
};

export default Login;

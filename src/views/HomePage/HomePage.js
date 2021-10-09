import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import ContactContainer from "../../components/ContactContainer/ContactContainer";
import loginup from "../../img/loginup.png";
import { CardMedia, Container } from "@mui/material";

const HomePage = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLogged ? (
        <ContactContainer />
      ) : (
        <Container
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            src={loginup}
            alt="login-please"
            sx={{ width: 550 }}
          />
        </Container>
      )}{" "}
    </>
  );
};

export default HomePage;

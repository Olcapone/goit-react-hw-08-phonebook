import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import codes_map from "../../img/codes_map.png";
import { CardMedia, Container } from "@mui/material";
import ContactsMenu from "../../components/ContactsMenu/ContactsMenu";

const HomePage = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        src={codes_map}
        alt="login-please"
        sx={{ width: 1 }}
      />
      {!isLogged && <ContactsMenu />}
    </Container>
  );
};

export default HomePage;

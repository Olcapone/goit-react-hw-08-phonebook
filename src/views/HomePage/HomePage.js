import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import ContactContainer from "../../components/ContactContainer/ContactContainer";

const HomePage = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLogged && <ContactContainer />}</>;
};

export default HomePage;

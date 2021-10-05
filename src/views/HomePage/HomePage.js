import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./HomePage.module.css";

const HomePage = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <section className={s.mainSection}>
      {isLogged && (
        <>
          <ContactForm />

          <h2 className="mainTitle">Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </section>
  );
};

export default HomePage;

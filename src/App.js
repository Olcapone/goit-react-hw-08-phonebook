import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
//=== static components
import Navigation from "./Navigation/Navigation";
//=== styles
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import authOperations from "./redux/auth/auth-operations";
import { getAllContact } from "./redux/contacts/contacts-selectors";
import ContactContainer from "./components/ContactContainer/ContactContainer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

//=== dinamic components
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const Login = lazy(() => import("./views/Login/Login"));
const Register = lazy(() => import("./views/Register/Register"));

function App() {
  const dispatch = useDispatch();
  const contact = useSelector(getAllContact);

  console.log(contact.length === 0);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <Login />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <Register />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactContainer />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

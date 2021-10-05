import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
//=== static components
import Navigation from "./Navigation/Navigation";
//=== styles
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import authOperations from "./redux/auth/auth-operations";
//=== dinamic components
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const Login = lazy(() => import("./views/Login/Login"));
const Register = lazy(() => import("./views/Register/Register"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
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

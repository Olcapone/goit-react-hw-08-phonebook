import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
//=== static components
import Navigation from "./Navigation/Navigation";
//=== styles
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import authOperations from "./redux/auth/auth-operations";
import ContactContainer from "./components/ContactContainer/ContactContainer";
import authSelectors from "./redux/auth/auth-selectors";

//=== dynamic components
const HomePage = lazy(() => import("./views/HomePage"));
const Login = lazy(() => import("./views/Login"));
const Signup = lazy(() => import("./views/Signup"));

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path={isLogged ? "/contacts" : "/login"}
                 element={isLogged ? <ContactContainer/> : <Login/>}
          >
          </Route>
          <Route path="/register" element={<Signup/>}></Route>
          <Route to="*" redirectTo="/"/>
        </Routes>
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

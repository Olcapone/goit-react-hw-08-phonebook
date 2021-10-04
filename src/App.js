import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";

import Navigation from "./Navigation/Navigation";
import "./App.css";

//=== components
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const Login = lazy(() => import("./views/Login/Login"));
const Register = lazy(() => import("./views/Register/Register"));

function App() {
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
    </>
  );
}

export default App;

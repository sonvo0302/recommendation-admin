import React from "react";
import { Redirect, Route } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import { isAuth } from "../../utils/auth";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log(user)
  if (!isAuth(user)) {
    return <Redirect to={"/login"} />;
  }
  return (
    <Route {...rest}>
      <Header />
      <Component />
      <Footer />
    </Route>
  );
};

export default PrivateRoute;

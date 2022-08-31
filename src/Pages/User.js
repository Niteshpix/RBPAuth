import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../Components/Header";

function User({state}) {
  const token = localStorage.getItem("UserToken");
    let logedIn = true;
    if (token == null) {
      logedIn = false;
    }

    state = {
      logedIn,
    };
    if (state.logedIn === false) {
      return <Navigate to="/" />;
    }
  return (
    <div>
      <Header/>
      <h1>{}</h1>
    </div>
  );
}

export default User;

import React from "react";
import { Navigate } from "react-router-dom";

function Admin({ state }) {
  const token = localStorage.getItem("AdminToken");
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
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;

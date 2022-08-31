import React from "react";
import { Navigate } from "react-router-dom";

function Manger({ state }) {
  const token = localStorage.getItem("ManagerToken");
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
      <h1>Manager Dashboard</h1>
    </div>
  );
}

export default Manger;

import { Navigate, Outlet } from "react-router-dom";
const Protected = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
export default Protected;
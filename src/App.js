import "./App.css";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Manger from "./Pages/Manger";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/manager" element={<Manger />} />
      </Routes>
    </div>
  );
}

export default App;

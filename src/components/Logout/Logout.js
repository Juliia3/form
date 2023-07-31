import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import MuiCard from "../MuiCard/MuiCard";
import "./logout.css";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <MuiCard />
      <button className="btn logout__btn" onClick={(e) => handleLogout(e)}>
        Log out
      </button>
    </div>
  );
}

export default Logout;

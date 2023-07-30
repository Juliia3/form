import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h2>Hello this is log out page</h2>
      <button className="logout__btn btn" onClick={(e) => handleLogout(e)}>
        Log out
      </button>
    </div>
  );
}

export default Logout;

import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { selectUser } from "./features/userSlice";
import Logout from "./components/Logout/Logout";
import "./style/main.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./components/Password/Password";

function App() {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      {/* <div className="App">
        <div className="page-wrapper">{user ? <Logout /> : <Login />}</div>
      </div> */}
      <div className="page-wrapper">
        <Routes>
          <Route index element={user ? <Logout /> : <Login />} />

          <Route path="password" element={<Password />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

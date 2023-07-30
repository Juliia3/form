import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { selectUser } from "./features/userSlice";
import Logout from "./components/Logout/Logout";
import "./style/main.css";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <div className="page-wrapper">{user ? <Logout /> : <Login />}</div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Burger from "./components/BurgerBuilder/BurgerBuilder";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Header from "./components/Header/Header";

function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Burger />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
   </>
  );
}

export default App;

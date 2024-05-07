import { useSelector } from "react-redux";

import NavLoggedIn from "./NavLoggedIn";
import NavPublic from "./NavPublic";

function Header() {

  const isLoggedIn = useSelector((state)=> state.isLoggedIn)
  return (
    isLoggedIn ? <NavLoggedIn /> : <NavPublic />
  );
}

export default Header;

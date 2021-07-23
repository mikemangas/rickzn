import { NavLink } from "react-router-dom";
import logo from "../img/rickmortylogo.png";

export default function Header() {
  return (
    <header className="App__header">
      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
      <img src={logo} alt="rickNmorty-logo"></img>
    </header>
  );
}

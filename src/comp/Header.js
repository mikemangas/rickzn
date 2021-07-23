import { NavLink } from "react-router-dom";
import logo from "../img/rickmortylogo.png";

export default function Header() {
  return (
    <header className="App__header">
      <img class="App__header__logo" src={logo} alt="rickNmorty-logo"></img>
      <div className="App__header__navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
    </header>
  );
}
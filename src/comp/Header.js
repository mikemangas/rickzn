import { NavLink } from "react-router-dom";
import logo from "../img/rickmortylogo.png";

export default function Header() {
  return (
    <header className="App__header">
      <div className="App__header--left">
        <NavLink to="/">
          {" "}
          <img class="App__header__logo" src={logo} alt="rickNmorty-logo"></img>
        </NavLink>
      </div>
      <div className="App__header__navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
    </header>
  );
}

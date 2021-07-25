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
        <NavLink to="/characters/1">Characters</NavLink>
        <NavLink to="/favourite">Favourites</NavLink>
      </div>
    </header>
  );
}

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import CharacterSinglePage from "../pages/CharacterSinglePage";
import NoMatch from "../pages/NoMatch";
import FavouritePage from "../pages/FavouritePage";
export default function Main() {
  return (
    <main className="App__main">
      <Switch>
        <Route exact path="/characterz/:characterId">
          <CharacterSinglePage />
        </Route>
        <Route exact path="/characters/:charactersId">
          <Characters />
        </Route>
        <Route exact path="/favourite">
          <FavouritePage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <NoMatch />
        </Route>
      </Switch>
    </main>
  );
}

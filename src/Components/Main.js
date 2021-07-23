import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import CharacterSinglePage from "../pages/CharacterSinglePage";
export default function Main() {
  return (
    <main className="App__main">
      <Switch>
        <Route path="/characters/:characterId">
          <CharacterSinglePage />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

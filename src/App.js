import "./App.css";
import Cookies from "js-cookie";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Character from "./containers/Character";
import Favorites from "./containers/Favorites";

function App() {
  const [favoriteCharacterTab, setFavoriteCharacterTab] = useState([]);
  const [favoriteComicTab, setFavoriteComicTab] = useState([]);
  Cookies.set("comics", JSON.stringify(favoriteComicTab));
  Cookies.set("characters", JSON.stringify(favoriteCharacterTab));
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics
            favoriteComicTab={favoriteComicTab}
            setFavoriteComicTab={setFavoriteComicTab}
          />
        </Route>
        <Route path="/characters">
          <Characters
            favoriteCharacterTab={favoriteCharacterTab}
            setFavoriteCharacterTab={setFavoriteCharacterTab}
          />
        </Route>
        <Route path="/character">
          <Character
            favoriteComicTab={favoriteComicTab}
            setFavoriteComicTab={setFavoriteComicTab}
          />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

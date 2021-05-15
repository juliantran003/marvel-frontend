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
  const [favoriteTab, setFavoriteTab] = useState([]);

  Cookies.set("character", JSON.stringify(favoriteTab));
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/characters">
          <Characters
            favoriteTab={favoriteTab}
            setFavoriteTab={setFavoriteTab}
          />
        </Route>
        <Route path="/character">
          <Character />
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

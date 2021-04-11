import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Themes from "./components/Themes";
import Games from "./components/Games";
import GamesTheme from "./components/GamesTheme";
import DescribedGame from "./components/DescribedGame";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";

export default function App() {
  const [ifConnected, setIfConnected] = useState(false);

  return (
    <div className="App">
      <Header ifConnected={ifConnected} setIfConnected={setIfConnected} />
      <article>
        <Switch>
          <Route path="/jeux/:id" component={DescribedGame} />
          <Route exact path="/jeux" component={Games} />
          <Route exact path="/themes/:id/jeux" component={GamesTheme} />
          <Route exact path="/themes" component={Themes} />
          <Route path="/connexion">
            <Login ifConnected={ifConnected} setIfConnected={setIfConnected} />
          </Route>
          <Route path="/admin" component={Admin} />
          <Route exact to="/" component={Home} />
        </Switch>
      </article>
    </div>
  );
}

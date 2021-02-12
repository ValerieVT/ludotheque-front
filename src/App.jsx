import React from "react";
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
  return (
    <div className="App">
      <Header />
      <article>
        <Switch>
          <Route path="/jeux/:id" component={DescribedGame} />
          <Route exact path="/jeux" component={Games} />
          <Route exact path="/themes/:id/jeux" component={GamesTheme} />
          <Route exact path="/themes" component={Themes} />
          <Route path="/connexion" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route exact to="/" component={Home} />
        </Switch>
      </article>
    </div>
  );
}

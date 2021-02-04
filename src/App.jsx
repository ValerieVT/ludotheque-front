import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import Themes from "./components/Themes";
import Games from "./components/Games";
import DescribedGame from "./components/DescribedGame";
import Login from "./components/Login";
import Admin from "./components/Admin";

export default function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/check", { withCredentials: true })
      .then(() => console.log("success"))
      .catch(() => console.error("error"));
  }, []);
  return (
    <div className="App">
      <Header />
      <article>
        <Switch>
          <Route path="/jeux/:id" component={DescribedGame} />
          <Route exact path="/jeux" component={Games} />
          <Route exact path="/themes" component={Themes} />
          <Route path="/connexion" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route exact to="/" component={Home} />
        </Switch>
      </article>
    </div>
  );
}

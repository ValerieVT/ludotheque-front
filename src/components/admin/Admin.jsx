import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminPictures from "./AdminPictures";
import AdminThemes from "./AdminThemes";
import AdminGames from "./AdminGames";
import "./Admin.css";

const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <article className="Admin">
      <h2>L'arrière-salle</h2>
      <Switch>
        <Route path={`${path}/photos`} component={AdminPictures} />
        <Route path={`${path}/themes`} component={AdminThemes} />
        <Route exact path={`${path}/jeux`} component={AdminGames} />
        <Route exact path={`${path}/`}>
          <ul className="choices">
            <Link to={`${path}/photos`} title="Ajouter des photos">
              <li>
                <span>Ajouter des photos</span>
              </li>
            </Link>
            <Link to={`${path}/themes`} title="Gérer les thèmes">
              <li>
                <span>Gérer les thèmes</span>
              </li>
            </Link>
            <Link to={`${path}/jeux`} title="Ajouter un jeu">
              <li>
                <span>Ajouter ou modifier un&nbsp;jeu</span>
              </li>
            </Link>
          </ul>
          <p className="chercher">Chercher si un jeu est déjà en base&nbsp;:</p>
          <form>
            <label htmlFor="jeuEnStock">
              <input type="text" id="jeuEnStock"></input>
            </label>
            <button type="submit">Go !</button>
          </form>
        </Route>
      </Switch>
    </article>
  );
};

export default Admin;
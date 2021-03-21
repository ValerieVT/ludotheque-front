import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminPictures from "./AdminPictures";
import AdminThemes from "./AdminThemes";
import AdminGame from "./AdminGame";
import ListOfExistingGames from "../ListOfExistingGames";
import AdminGamesNotDisplayed from "./AdminGamesNotDisplayed";
import "./Admin.css";

const Admin = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [listOfPossibleGames, setListOfPossibleGames] = useState([]);

  const history = useHistory();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}auth/admin`, {
        withCredentials: true,
      })
      .then(() => console.log("tu es connecté"))
      .catch(() => history.push("/"));
  }, []);

  const searchGame = (e) => {
    const inputSearch = e.target.value;
    if (inputSearch.length <= 1) {
      setListOfPossibleGames([]);
    } else if (inputSearch.length > 1) {
      const url = `${process.env.REACT_APP_API_URL}auth/admin/jeux/search?name=`;
      axios
        .get(`${url}${inputSearch}`, {
          withCredentials: true,
        })
        .then((response) => response.data)
        .then((listOfSearchedGames) => {
          setListOfPossibleGames(listOfSearchedGames);
        })
        .catch((error) => {
          setInfoMessage(error.response?.data?.error);
        });
    }
  };

  const { path } = useRouteMatch();

  return (
    <article className="Admin">
      <h2>
        <Link to={`${path}`}>L'arrière-salle</Link>
      </h2>
      <Switch>
        <Route path={`${path}/photos`} component={AdminPictures} />
        <Route path={`${path}/themes`} component={AdminThemes} />
        <Route exact path={`${path}/jeux`} component={AdminGame} />
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
                <span>Ajouter un&nbsp;jeu</span>
              </li>
            </Link>
          </ul>
          <p className="chercher">Modifier un jeu&nbsp;:</p>
          <form>
            <label htmlFor="jeuEnStock">
              <input type="text" id="jeuEnStock" onChange={searchGame}></input>
            </label>
          </form>
          {listOfPossibleGames.length === [] ? (
            ""
          ) : (
            <ListOfExistingGames listOfPossibleGames={listOfPossibleGames} />
          )}
          <p className="error-message">{infoMessage}</p>
          <AdminGamesNotDisplayed />
        </Route>
      </Switch>
    </article>
  );
};

export default Admin;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleGame from "./SingleGame";
import "./Games.css";
import ReactSlider from "react-slider";

export default function Games() {
  const [listOfGames, setListOfGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [filtersDeployed, setFiltersDeployed] = useState("");

  const getGames = () => {
    const paramsOfURL = new URLSearchParams(window.location.search);
    const paramsToUse = paramsOfURL.toString();
    const searchWithParamsToUse =
      paramsToUse === "" ? `` : `search/?${paramsToUse}`;
    const url = `${process.env.REACT_APP_API_URL}jeux/${searchWithParamsToUse}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfGames) => {
        setListOfGames(arrayOfGames);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <article className="Games">
      <h2>La sélection&nbsp;:</h2>
      <div className="filters">
        <button
          onClick={() => {
            filtersDeployed === ""
              ? setFiltersDeployed("deployed")
              : setFiltersDeployed("");
          }}
        >
          {filtersDeployed === ""
            ? "Filtrer ce résultat"
            : "Masquer les filtres"}
        </button>

        <form className={filtersDeployed}>
          <ul>
            <li>
              <label className="fullwidth">
                Age des joueurs
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={3}
                  max={20}
                  defaultValue={[18, 20]}
                  ariaLabel={[
                    "Age du plus jeune joueur",
                    "Age du plus vieux joueur",
                  ]}
                  ariaValuetext={(state) =>
                    `Age sélectionné : ${state.valueNow}`
                  }
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={2}
                />
              </label>
            </li>
            <li>
              <label className="fullwidth">
                Durée de la partie (min)
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={10}
                  max={180}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </label>
            </li>
            <li>
              <label className="fullwidth">
                Nombre de joueurs
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={1}
                  max={8}
                  defaultValue={3}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </label>
            </li>
            <li>
              <label className="fullwidth">
                Difficulté de la règle du jeu
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="thumb"
                  trackClassName="track"
                  min={1}
                  max={3}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </label>
            </li>
            <li className="option-cards">
              <input type="checkbox" id="chance" name="chance" />
              <label htmlFor="chance">chance</label>
              <input type="checkbox" id="reflexion" name="reflexion" />
              <label htmlFor="reflexion">réflexion</label>
              <input type="checkbox" id="adresse" name="adresse" />
              <label htmlFor="adresse">adresse</label>
              <input
                type="checkbox"
                id="culturegenerale"
                name="culturegenerale"
              />
              <label htmlFor="culturegenerale">culture générale</label>
            </li>
          </ul>
          <button type="submit">Je veux voir les résultats !</button>
        </form>
      </div>
      <ul>
        <li className="error-message">{errorMessage}</li>
        {listOfGames !== []
          ? listOfGames.map((game) => (
              <SingleGame
                name={game.name}
                image={game.image}
                id={game.id}
                key={game.id}
              />
            ))
          : ""}
        <li className="retour-hp">
          <Link to="/" title="Page d'accueil">
            Retour à la page d'accueil
          </Link>
        </li>
      </ul>
    </article>
  );
}

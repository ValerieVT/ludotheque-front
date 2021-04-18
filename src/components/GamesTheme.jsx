import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleGame from "./SingleGame";
import "./Games.css";

export default function GamesTheme(props) {
  const [listOfGames, setListOfGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getGames = () => {
    const { id } = props.match.params;
    const url = `${process.env.REACT_APP_API_URL}themes/${id}/jeux/`;
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
      <h2>
        La sélection{" "}
        {listOfGames.length > 0 ? listOfGames[0].selectionned_theme : ""}
        &nbsp;:
      </h2>
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
          <Link to="/themes" title="Page sommaire des thèmes">
            Retour à la liste des thèmes
          </Link>
        </li>
      </ul>
    </article>
  );
}

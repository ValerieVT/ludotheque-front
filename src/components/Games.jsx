import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SingleGame from "./SingleGame";
import "./Games.css";

export default function Games() {
  const history = useHistory();
  const [listOfGames, setListOfGames] = useState([]);

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
        console.log(listOfGames.length);
      })
      .catch((error) => {
        console.log(error.response?.data?.error);
        history.push("/");
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <article className="Games">
      <h2>La sélection&nbsp;:</h2>
      <ul>
        {listOfGames !== [] && listOfGames.length > 1
          ? listOfGames.map((game) => (
              <SingleGame
                name={game.name}
                image={game.image}
                id={game.id}
                key={game.id}
              />
            ))
          : ""}
        {listOfGames.hasOwnProperty("name") ? (
          <SingleGame
            name={listOfGames.name}
            image={listOfGames.image}
            id={listOfGames.id}
            key={listOfGames.id}
          />
        ) : (
          ""
        )}
      </ul>
    </article>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminGamesNotDisplayed.css";

const AdminGamesNotDisplayed = () => {
  const [listOfGameTitles, setListOfGameTitles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getGamesNotDisplayed = () => {
    const url = `${process.env.REACT_APP_API_URL}auth/admin/jeux/sans-photo`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfTitles) => {
        setListOfGameTitles(arrayOfTitles);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.error);
      });
  };

  useEffect(() => {
    getGamesNotDisplayed();
  }, []);

  return (
    <article className="AdminGamesNotDisplayed">
      <p>Attention ! ces jeux n'ont pas de photo :</p>
      <ul>
        <li className="error-message">{errorMessage}</li>
        {listOfGameTitles !== []
          ? listOfGameTitles.map((game) => (
              <li key={game.id}>
                <Link
                  to={`admin/jeux/${game.id}`}
                  title={`Ajouter une photo à ${game.name}`}
                >
                  {game.name}
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </article>
  );
};

export default AdminGamesNotDisplayed;

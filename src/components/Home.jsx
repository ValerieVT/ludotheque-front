import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [randomGame, setRandomGame] = useState(1);

  const getGames = () => {
    const url = `${process.env.REACT_APP_API_URL}jeux/random`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((randomId) => {
        setRandomGame(randomId.id);
      })
      .catch((error) => {
        console.error(error.response?.data?.error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <main className="Home">
      <ul className="choices">
        <Link
          to="/jeux?gamerule_difficulty=1&reflection=1"
          title="Jeux simples, sans réflexion"
        >
          <li>
            <span>J'ai pas DU TOUT envie de réfléchir</span>
          </li>
        </Link>
        <Link to="/jeux?reflection=3" title="Jeux de réflexion">
          <li>
            <span>Un jeu pour faire fumer mes méninges&nbsp;!</span>
          </li>
        </Link>
        <Link
          to="/jeux?gamerule_difficulty=1"
          title="Jeux dont la règle est simple"
        >
          <li>
            <span>Un jeu facile à comprendre</span>
          </li>
        </Link>
        <Link
          to="/jeux?gamerule_difficulty=3"
          title="Jeux dont la règle est compliquée"
        >
          <li>
            <span>Je veux me lancer sur une règle du jeu compliquée</span>
          </li>
        </Link>
        <Link to="/jeux?duration_max=15" title="Jeux courts">
          <li>
            <span>On joue, mais pas longtemps&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?duration_min=90" title="Jeux longs">
          <li>
            <span>Je veux occuper toute ma soirée&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?collaborative=1" title="Jeux coopératifs">
          <li>
            <span>Coop' : un pour tous, tous pour un&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?asymetric=1" title="Jeux asymétriques">
          <li>
            <span>Jeux asymétriques : un rôle différent chacun&nbsp;!</span>
          </li>
        </Link>
        <Link to="/themes" title="Thèmes" className="theme-link">
          <li className="theme">
            <span>Soirée thématique&nbsp;!</span>
          </li>
        </Link>
      </ul>
      <ul className="half-conteneur">
        <Link to={`/jeux/${randomGame}`} title="Un jeu au hasard">
          <li className="half">
            <span>Un jeu au hasard</span>
          </li>
        </Link>
        <Link to="/jeux" title="Tous les jeux">
          <li className="half">
            <span>Voir tous les jeux</span>
          </li>
        </Link>
      </ul>
    </main>
  );
}

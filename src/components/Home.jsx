import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="Home">
      <ul className="choices">
        <Link to="/jeux?gamerule_difficulty=1&reflection=1">
          <li>
            <span>J'ai pas DU TOUT envie de réfléchir</span>
          </li>
        </Link>
        <Link to="/jeux?reflection=3">
          <li>
            <span>Un jeu pour faire fumer mes méninges&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?gamerule_difficulty=1">
          <li>
            <span>Un jeu facile à comprendre</span>
          </li>
        </Link>
        <Link to="/jeux?gamerule_difficulty=3">
          <li>
            <span>Je veux me lancer sur une règle du jeu compliquée</span>
          </li>
        </Link>
        <Link to="/jeux?duration_min_in_minuts=15">
          <li>
            <span>On joue, mais pas longtemps&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?duration_min_in_minuts=90">
          <li>
            <span>Je veux occuper toute ma soirée&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?collaborative=1">
          <li>
            <span>Un pour tous, tous pour un&nbsp;!</span>
          </li>
        </Link>
        <Link to="/jeux?asymetric=1">
          <li>
            <span>Jeux asymétriques : un rôle différent chacun&nbsp;!</span>
          </li>
        </Link>
        <Link to="/" className="theme-link">
          <li className="theme">
            <span>Soirée thématique&nbsp;!</span>
          </li>
        </Link>
      </ul>
      <ul className="half-conteneur">
        <Link to="/jeux?">
          <li className="half">
            <span>Un jeu au hasard</span>
          </li>
        </Link>
        <Link to="/jeux">
          <li className="half">
            <span>Voir tous les jeux</span>
          </li>
        </Link>
      </ul>
    </main>
  );
}

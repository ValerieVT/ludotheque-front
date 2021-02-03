import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul className="Home">
      <Link to="/jeux">
        <li>
          <span>J'ai pas DU TOUT envie de réfléchir</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Un jeu pour faire fumer mes méninges&nbsp;!</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Un jeu facile à comprendre</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Je veux me lancer sur une règle du jeu compliquée</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>On joue, mais pas longtemps&nbsp;!</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Je veux occuper toute ma soirée&nbsp;!</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Un pour tous, tous pour un&nbsp;!</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <span>Jeux asymétriques : un rôle différent chacun&nbsp;!</span>
        </li>
      </Link>
      <Link to="/">
        <li className="theme">
          <span>Soirée thématique&nbsp;!</span>
        </li>
      </Link>
    </ul>
  );
}

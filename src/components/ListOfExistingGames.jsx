import React from "react";
import { Link } from "react-router-dom";
import "./ListOfExistingGames.css";

export default function ListOfExistingGames(props) {
  const { listOfPossibleGames } = props;
  return (
    <ul className="ListOfExistingGames">
      {listOfPossibleGames.map((game) => (
        <li>
          <Link to={`/jeux/${game.id}`} title={game.name}>
            {game.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

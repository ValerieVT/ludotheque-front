import React from "react";
import { Link } from "react-router-dom";
import "./ListOfExistingGames.css";

export default function ListOfExistingGames(props) {
  const { listOfPossibleGames, url } = props;
  return (
    <ul className="ListOfExistingGames">
      {listOfPossibleGames.map((game) => (
        <li key={game.id}>
          <Link to={`${url}${game.id}`} title={game.name}>
            {game.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

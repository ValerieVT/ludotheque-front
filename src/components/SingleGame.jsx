import React from "react";
import { Link } from "react-router-dom";
import "./SingleGame.css";

function SingleGame(props) {
  const { name, image } = props;
  return (
    <li className="SingleGame">
      <Link to="/">
        <img src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
    </li>
  );
}

export default SingleGame;

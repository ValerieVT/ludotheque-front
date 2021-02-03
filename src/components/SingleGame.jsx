import React from "react";
import "./SingleGame.css";

function SingleGame(props) {
  const { name, image } = props;
  return (
    <li className="SingleGame">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </li>
  );
}

export default SingleGame;

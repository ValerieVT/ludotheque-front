import React from "react";
import { Link } from "react-router-dom";
import "./SingleGame.css";

function SingleGame(props) {
  const { name, image, id } = props;
  return (
    <li className="SingleGame">
      <Link to={`/jeux/${id}`}>
        <img
          src={`${process.env.REACT_APP_API_PICTURES_URL}${image}`}
          alt={name}
        />
      </Link>
      <h3>{name}</h3>
    </li>
  );
}

export default SingleGame;

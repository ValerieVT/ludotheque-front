import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./DescribedGame.css";

export default function DescribedGame(props) {
  const history = useHistory();
  const [selectionnedGame, setSelectionnedGame] = useState([]);
  const [selectionnedPicture, setSelectionnedPicture] = useState("");

  const getGame = () => {
    const { id } = props.match.params;
    const url = `${process.env.REACT_APP_API_URL}jeux/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((theGame) => {
        setSelectionnedGame(theGame);
      })
      .catch((error) => {
        console.log(error.response?.data?.error);
        history.push("/");
      });
  };

  useEffect(() => {
    getGame();
  }, []);

  const chosenPicture = (index) => {
    setSelectionnedPicture(pictures[index].image);
  };

  const pictures = selectionnedGame["0"];
  const firstPicture =
    pictures !== undefined ? pictures.find((e) => e !== undefined) : "";

  return (
    <main className="DescribedGame">
      <h2>{selectionnedGame.name}</h2>

      <p className="summary">{selectionnedGame.summary}</p>
      <div className="details">
        <div className="slider">
          {selectionnedPicture === "" ? (
            <img src={firstPicture.image} alt={selectionnedGame.name} />
          ) : (
            <img src={selectionnedPicture} alt={selectionnedGame.name} />
          )}
          <div className="list-buttons">
            {pictures !== undefined && pictures.length >= 2
              ? pictures.map((btn, index) => (
                  <div
                    className="button-slider"
                    key={index}
                    onClick={() => chosenPicture(index)}
                  />
                ))
              : ""}
          </div>
        </div>
        <article>
          {selectionnedGame.duration_min_in_minuts !== null ? (
            <p>
              <img className="picto" src="../logos/duree.svg" alt="" />
              Durée&nbsp;: {selectionnedGame.duration_min_in_minuts}
              &nbsp;min
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.collaborative === 1 ? (
            <p>
              <img className="picto" src="../logos/cooperatif.svg" alt="" />
              Coopératif
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.asymetric === 1 ? (
            <p>
              <img className="picto" src="../logos/asymetrique.svg" alt="" />
              Asymétrique
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.player_nbmin !== null &&
          selectionnedGame.player_nbmax !== null ? (
            <p className="wider">
              De {selectionnedGame.player_nbmin} à{" "}
              {selectionnedGame.player_nbmax} joueurs
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.player_agemin !== null &&
          selectionnedGame.player_agemax !== null ? (
            <p className="wider">
              {selectionnedGame.player_agemin !== null
                ? `Conseillé de ${selectionnedGame.player_agemin} à ${selectionnedGame.player_agemax} ans`
                : ""}
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.player_agemin === null &&
          selectionnedGame.player_agemax !== null ? (
            <p className="wider">
              {selectionnedGame.player_agemin !== null
                ? `Peut devenir ennuyeux après ${selectionnedGame.player_agemax} ans`
                : ""}
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.player_agemin !== null &&
          selectionnedGame.player_agemax === null ? (
            <p className="wider">
              {selectionnedGame.player_agemin !== null
                ? `A partir de ${selectionnedGame.player_agemin} ans`
                : ""}
            </p>
          ) : (
            ""
          )}
          {selectionnedGame.gamerule_difficulty === "1" ? (
            <p className="wider">Apprentissage des règles : très facile</p>
          ) : (
            ""
          )}
          {selectionnedGame.gamerule_difficulty === "2" ? (
            <p className="wider">Apprentissage des règles : accessible</p>
          ) : (
            ""
          )}
          {selectionnedGame.gamerule_difficulty === "3" ? (
            <p className="wider">Apprentissage des règles : difficile</p>
          ) : (
            ""
          )}

          {selectionnedGame.generalknowledge !== null ? (
            <p>Culture générale : {selectionnedGame.generalknowledge}/3</p>
          ) : (
            ""
          )}
          {selectionnedGame.chance !== null ? (
            <p>Chance : {selectionnedGame.chance}/3</p>
          ) : (
            ""
          )}
          {selectionnedGame.reflexion !== null ? (
            <p>Réflexion : {selectionnedGame.reflexion}/3</p>
          ) : (
            ""
          )}

          {selectionnedGame.skill !== null ? (
            <p>Adresse : {selectionnedGame.skill}/3</p>
          ) : (
            ""
          )}
        </article>
      </div>
    </main>
  );
}

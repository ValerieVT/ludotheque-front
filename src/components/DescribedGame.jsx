import React from "react";
import axios from "axios";

class DescribedGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionnedGame: [],
    };
  }

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    const { id } = this.props.match.params;
    const url = `${process.env.REACT_APP_API_URL}jeux/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((theGame) => {
        this.setState({
          selectionnedGame: theGame,
        });
      });
  };
  render() {
    const { selectionnedGame } = this.state;
    return (
      <>
        <img src="" alt="" />
        <h2>{selectionnedGame.name}</h2>
        <p>{selectionnedGame.summary}</p>
        <p>Durée (min) : {selectionnedGame.duration_min_in_minuts} min</p>
        <p>
          De {selectionnedGame.player_nbmin} à {selectionnedGame.player_nbmax}{" "}
          joueurs
        </p>
        <p>
          {selectionnedGame.player_agemax !== null
            ? `A partir de ${selectionnedGame.player_agemin} ans`
            : ""}
        </p>
        <p>
          {selectionnedGame.player_agemax !== null
            ? `Déconseillé aux plus de ${selectionnedGame.player_agemax} ans ;)`
            : ""}
        </p>
        <p>{selectionnedGame.collaborative === 1 ? "collaboratif" : ""}</p>
        <p>{selectionnedGame.asymetric === 1 ? "Jeu asymétrique" : ""}</p>
        <p>
          Apprentissage des règles : niveau{" "}
          {selectionnedGame.gamerule_difficulty}/3
        </p>
        <p>
          {selectionnedGame.generalknowledge !== null
            ? `Culture générale : ${selectionnedGame.generalknowledge}/3`
            : ""}
        </p>
        <p>
          {selectionnedGame.chance !== null
            ? `Chance : ${selectionnedGame.chance}/3`
            : ""}
        </p>
        <p>
          {selectionnedGame.reflexionRéflexion !== null
            ? `Réflexion : ${selectionnedGame.reflexion}/3`
            : ""}
        </p>
        <p>
          {selectionnedGame.skill !== null
            ? `Adresse : ${selectionnedGame.skill}/3`
            : ""}
        </p>
      </>
    );
  }
}

export default DescribedGame;

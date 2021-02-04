import axios from "axios";
import React from "react";
import SingleGame from "./SingleGame";
import "./Games.css";

class GamesTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfGames: [],
    };
  }

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    const { id } = this.props.match.params;
    const url = `${process.env.REACT_APP_API_URL}themes/${id}/jeux/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((gamesArray) => {
        this.setState({
          listOfGames: gamesArray,
        });
      });
  };

  render() {
    const { listOfGames } = this.state;

    return (
      <article className="Games">
        <h2>La sélection thématique&nbsp;:</h2>
        <ul>
          {listOfGames.map((game) => (
            <SingleGame
              name={game.name}
              image={game.image}
              id={game.id}
              key={game.id}
            />
          ))}
        </ul>
      </article>
    );
  }
}

export default GamesTheme;

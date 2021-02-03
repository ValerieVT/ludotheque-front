import axios from "axios";
import React from "react";
import SingleGame from "./SingleGame";
import "./Games.css";

class Games extends React.Component {
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
    const url = `${process.env.REACT_APP_API_URL}jeux/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((nouveautesArray) => {
        this.setState({
          listOfGames: nouveautesArray,
        });
      });
  };

  render() {
    const { listOfGames } = this.state;

    return (
      <article className="Games">
        <h2>La sélection&nbsp;:</h2>
        <ul>
          {listOfGames.map((game) => (
            <SingleGame name={game.name} image={game.image} key={game.id} />
          ))}
        </ul>
      </article>
    );
  }
}

export default Games;

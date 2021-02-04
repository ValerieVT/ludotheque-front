import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Themes.css";

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfThemes: [],
    };
  }

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    const url = `${process.env.REACT_APP_API_URL}themes/`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((themesArray) => {
        this.setState({
          listOfThemes: themesArray,
        });
      });
  };

  render() {
    const { listOfThemes } = this.state;

    return (
      <article className="Themes">
        <h2>Thèmes</h2>
        <ul>
          {listOfThemes.map((theme) => (
            <Link
              to={`/themes/${theme.id}/jeux`}
              title={theme.name}
              key={theme.id}
            >
              <li>{theme.name}</li>
            </Link>
          ))}
        </ul>
      </article>
    );
  }
}

export default Themes;

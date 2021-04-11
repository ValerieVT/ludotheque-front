import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Header = ({ ifConnected, setIfConnected }) => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  function goBack() {
    history.goBack();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setIfConnected(false);
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.error);
      });
  };

  return (
    <header>
      <h1>
        <Link to="/" title="Retour à la page d'accueil">
          Ludothèque
        </Link>
      </h1>
      <div>
        <span className="back" onClick={goBack} title="Retour">
          🠴
        </span>
        <span className="connection">
          {ifConnected ? (
            <form onSubmit={handleSubmit}>
              <button type="submit">Se déconnecter</button>
            </form>
          ) : (
            <Link to="/connexion" title="Connexion">
              Se connecter
            </Link>
          )}
        </span>
      </div>
      <p className="error-message">{errorMessage}</p>
    </header>
  );
};

export default Header;

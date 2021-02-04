import React, { useContext } from "react";
import AuthContext from "./contexts/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <h1>
        <Link to="/" title="Retour à la page d'accueil">
          Ludothèque
        </Link>
      </h1>

      {user && (
        <div>
          <button type="button" onClick={logout}>
            Déconnexion
          </button>
        </div>
      )}
      {user !== {} && (
        <div>
          <Link to="/connexion" title="Connexion">
            Se connecter
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

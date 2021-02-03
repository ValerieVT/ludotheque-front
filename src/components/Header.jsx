import React, { useContext } from "react";
import AuthContext from "./contexts/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <Link to="/">
        <h1>Ludothèque</h1>
      </Link>
      {user && (
        <div>
          <button type="button" onClick={logout}>
            Déconnexion
          </button>
        </div>
      )}
      {user !== {} && (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

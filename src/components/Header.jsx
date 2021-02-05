import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" title="Retour à la page d'accueil">
          Ludothèque
        </Link>
      </h1>

      <div>
        <Link to="/connexion" title="Connexion">
          Se connecter
        </Link>
      </div>
    </header>
  );
};

export default Header;

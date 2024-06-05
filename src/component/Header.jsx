import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png" alt="logo" />
      <h1>Pokedex</h1>
      <nav>
        <ul className="menu-list">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

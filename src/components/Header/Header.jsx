import './Header.scss'; // Import des styles spécifiques au header
import logo from '../../assets/images/LOGO.png'; // Import du logo
import { NavLink, useLocation } from 'react-router-dom'; // Import de `useLocation` pour détecter la route actuelle

const Header = () => {
  const location = useLocation(); // Récupère l'URL active

  // Détermine la classe du header en fonction de la page
  const headerClass = location.pathname === "/about" ? "about-header" : "header";

  return (
    <header className={`header ${headerClass}`}>
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end // Empêche le lien "/" d'être actif pour d'autres sous-routes
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
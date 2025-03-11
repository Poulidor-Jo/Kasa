import './Header.scss'; // Import des styles spécifiques au header
import logo from '../../assets/images/LOGO.png'; // Import du logo
import { NavLink, useLocation } from 'react-router-dom'; // Import de `useLocation` pour détecter la route actuelle

const Header = () => {
  const location = useLocation(); // Récupère l'URL active

  // Détermine la classe du header en fonction de la page
  const headerClass = (() => {
      if (location.pathname === "/about") return "about-header ";
      //if (location.pathname === "/accommodations") return "footer-accommodations";
      if (location.pathname === "/404") return "error-header";
      return "header"; // Par défaut pour la page d'accueil
    })();

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
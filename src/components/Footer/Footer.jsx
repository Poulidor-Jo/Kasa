import { useLocation } from 'react-router-dom';
import './footer.scss';
import logo from '../../assets/images/LOGO.png';

const Footer = () => {
  const location = useLocation();
  
  // Définir une classe spécifique en fonction de la page actuelle
  const footerClass = (() => {
    if (location.pathname === "/about") return "about-footer";
    if (location.pathname === "/accommodations") return "footer-accommodations";
    if (location.pathname === "/404") return "footer-404";
    return "footer"; // Par défaut pour la page d'accueil
  })();

  return (
    <footer className={`footer ${footerClass}`}>
      <div className="footer-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
import { useLocation } from 'react-router-dom';
import './footer.scss';
import logo from '../../assets/images/LOGO.png';

const Footer = () => {
  const location = useLocation();
  
  // Définir une classe spécifique en fonction de la page actuelle
  const footerClass = location.pathname === "/about" ? "about-footer" : "footer";

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
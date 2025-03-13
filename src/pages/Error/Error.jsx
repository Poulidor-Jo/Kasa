import Footer from '../../components/Footer/Footer';
import './Error.scss'; // Import des styles spécifiques pour la page 404
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">

      {/* Main Content */}
      <main className="main-404">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/" className="back-home">
          Retourner sur la page d&apos;accueil
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Error;
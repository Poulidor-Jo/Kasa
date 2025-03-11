import { useLocation } from 'react-router-dom'; 
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import './About.scss';

const About = () => {
  const location = useLocation();

  return (
    <div className={`about ${location.pathname === '/about' ? 'about-active' : ''}`}>
      {/* Header */}
      <Header />

      <main className="about-main">
        {/* Banner */}
        <Banner className="about-main-banner" />

        {/* Collapse Sections */}
        <div className="collapse-container about-main-collapse-container">
            {[
              { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale...' },
              { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondamentales de Kasa...' },
              { title: 'Service', content: 'Nos équipes se tiennent à votre disposition...' },
              { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa...' }
            ].map(({ title, content }) => (
              <Collapse key={title} title={title} content={content} />
            ))}
        </div>
      </main>

       {/* Footer */}
       <Footer className="about-footer" />    
    </div>
  );
};

export default About;
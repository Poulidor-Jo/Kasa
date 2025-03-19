import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import "./About.scss";

const About = () => {
  const location = useLocation();

  return (
    <div
      className={`about ${
        location.pathname === "/about" ? "about-active" : ""
      }`}
    >
      <main className="about-main">
        {/* Banner */}
        <Banner customClass="about-main-banner" />

        {/* Collapse Sections */}
        <div className="collapse-container about-main-collapse-container">
          {[
            {
              title: "Fiabilité",
              content:
                "Les annonces postées sur Kasa garantissent une fiabilité totale...",
            },
            {
              title: "Respect",
              content:
                "La bienveillance fait partie des valeurs fondamentales de Kasa...",
            },
            {
              title: "Service",
              content: "Nos équipes se tiennent à votre disposition...",
            },
            {
              title: "Sécurité",
              content: "La sécurité est la priorité de Kasa...",
            },
          ].map(({ title, content},index) => (
            <Collapse key={`${title}-${index}`} title={title} content={content} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer className="about-footer" />
    </div>
  );
};

export default About;

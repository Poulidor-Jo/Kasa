import { useParams, Navigate  } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slides from '../../components/Slides/Slides';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Collapse from '../../components/Collapse/Collapse';
import accommodations from '../../data/accommodations.json';
import './Accommodation.scss';

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="accommodation">
      <Header />
      <main className="main-logement">
        {/* Carrousel */}
        <Slides pictures={accommodation.pictures} />

        {/* Détails via DetailedCard */}
        <DetailedCard
          title={accommodation.title}
          location={accommodation.location}
          tags={accommodation.tags}
          host={accommodation.host}
          rating={parseInt(accommodation.rating, 10)}
        />

        {/* Collapse Sections */}
        <div className="collapse-container">
          <Collapse title="Description" content={accommodation.description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {accommodation.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accommodation;
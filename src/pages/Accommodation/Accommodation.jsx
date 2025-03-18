import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Slides from '../../components/Slides/Slides';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import Collapse from '../../components/Collapse/Collapse';
import './Accommodation.scss';

const Accommodation = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Utilisation d'un booléen pour simplifier

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await fetch('/src/data/accommodations.json');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const data = await response.json();
        const foundAccommodation = data.find((item) => item.id === id);
        if (!foundAccommodation) {
          throw new Error('Logement introuvable');
        }
        setAccommodation(foundAccommodation);
      } catch (err) {
        setError(true); // Déclenche une redirection en cas d'erreur
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodation();
  }, [id]);

  if (error) {
    return <Navigate to="/404" replace />; // Redirection vers la page 404
  }

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div className="accommodation">
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
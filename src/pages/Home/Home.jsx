import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import './Home.scss'; // Import des styles spécifiques à la page Home

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch('/src/data/accommodations.json'); 
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const data = await response.json();
        setAccommodations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className="home">
      <main className="main-index">
        {/* Banner */}
        <Banner title="Chez vous, partout et ailleurs" />

        {/* Liste des logements */}
        <div className="housing housing-index">
          <section className="housing-grid">
            {accommodations.map(({ id, cover, title }) => (
              <Card key={id} image={cover} title={title} link={`/logement/${id}`} />
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
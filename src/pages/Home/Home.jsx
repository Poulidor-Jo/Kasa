import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import accommodations from '../../data/accommodations.json'; // Import des données JSON
import './Home.scss'; // Import des styles spécifiques à la page Home

const Home = () => {
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
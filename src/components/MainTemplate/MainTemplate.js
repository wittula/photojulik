import Contact from 'components/Contact/Contact';
import Gallery from 'components/Gallery/Gallery';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const MainTemplate = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default MainTemplate;

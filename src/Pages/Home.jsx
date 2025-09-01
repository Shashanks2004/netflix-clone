import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";

// ✅ Import local images
import DONOImage from "../assets/DONO.jpeg";
import ECEImage from "../assets/ECE.jpeg";
import CSEImage from "../assets/CSE.jpeg";
import ENDImage from "../assets/END.jpeg";

export default function Home() {
  // ✅ Replace sampleMovies with your own images
  const DonoMovies = [DONOImage];
  const ECEMovies = [ECEImage];
  const CSEMovies = [CSEImage];
  const EndMovies = [ENDImage];

  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="DONO KAH YAADEIN" movies={DonoMovies} link="dono" />
      <Row title="ECE KAH YAADEIN" movies={ECEMovies} link="ece" />
      <Row title="CSE KAH YAADEIN" movies={CSEMovies} link="cse" />
      <Row title="THE END" movies={EndMovies} link="end" />
    </div>
  );
}


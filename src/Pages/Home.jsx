import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";

// ✅ Import local images
import ECEImage from "../assets/ECE.jpeg";
import CSEImage from "../assets/CSE.jpeg";

export default function Home() {
  // ✅ Replace sampleMovies with your own images
  const eceMovies = [ECEImage]; 
  const cseMovies = [CSEImage];

  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="ECE memories" movies={eceMovies} link="/video/ece" />
      <Row title="CSE memories" movies={cseMovies} link="/video/cse" />
    </div>
  );
}


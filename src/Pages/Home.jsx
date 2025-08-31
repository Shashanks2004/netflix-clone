// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";

export default function Home() {
  const sampleMovies = [
    "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "https://image.tmdb.org/t/p/w500/AjH4wzgJxj7VtHg3tID8jY5ViD.jpg",
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="ECE memories" movies={sampleMovies} />
      <Row title="CSE memories" movies={sampleMovies} />
    </div>
  );
}

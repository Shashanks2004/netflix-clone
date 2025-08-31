// src/components/Row.jsx
import "./Row.css";

export default function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, idx) => (
          <img key={idx} src={movie} alt={title} className="poster" />
        ))}
      </div>
    </div>
  );
}

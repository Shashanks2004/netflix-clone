// src/components/Row.jsx
import { useNavigate } from "react-router-dom";
import "./Row.css";

export default function Row({ title, movies, link }) {
  const navigate = useNavigate();

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, idx) => (
          <img
            key={idx}
            src={movie}
            alt={title}
            className="poster"
            onClick={() => navigate(`/video/${link}`)} // ✅ Navigate dynamically
          />
        ))}
      </div>
    </div>
  );
}

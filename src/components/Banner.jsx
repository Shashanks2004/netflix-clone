// src/components/Banner.jsx
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import bannerImg from "../assets/banner.jpeg";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <img src={bannerImg} alt="banner" className="banner-img" />

      <div className="banner-content">
        <h1>Benchmate</h1>
        <p>Who thinks about others rather than her...!</p>

        {/* Play button navigates to /video */}
        <button className="btn play" onClick={() => navigate("/video")}>
          ▶ Play
        </button>

        <button className="btn info">ℹ More Info</button>
      </div>
    </div>
  );
}

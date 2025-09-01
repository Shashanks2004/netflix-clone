// src/components/Banner.jsx
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import BannerVideo from "../assets/Banner.mp4";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="Banner">
      {/* ✅ Use <video> instead of <img> */}
      <video
        className="Banner-video"
        src={BannerVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="Banner-content">
        <h1>Benchmate</h1>
        <p>"Happy Birthday hengsee"</p>

        {/* Play button navigates to /video */}
        <button className="btn play" onClick={() => navigate("/video/Banner")}>
          ▶ Play
        </button>

        <button className="btn info">ℹ More Info</button>
      </div>
    </div>
  );
}

// src/components/VideoPage.jsx
import { useNavigate } from "react-router-dom";
import bannerVideo from "../assets/banner.mp4";
import "./VideoPage.css";

export default function VideoPage() {
  const navigate = useNavigate();

  return (
    <div className="video-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <video className="video-player" controls autoPlay>
        <source src={bannerVideo} type="video/mp4" />
      </video>
    </div>
  );
}

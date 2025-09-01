// src/components/VideoPage.jsx
import { useNavigate, useParams } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ Get dynamic id from URL

  // ✅ Map id → video file
  const videoMap = {
    banner: "/videos/Banner.mp4",
    dono: "/videos/Dono.mp4",
    ece: "/videos/ECE.mp4",
    cse: "/videos/CSE.mp4",
    end: "/videos/End.mp4",
  };

  const selectedVideo = videoMap[id] || bannerVideo;

  return (
    <div className="video-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <video className="video-player" controls autoPlay>
        <source src={selectedVideo} type="video/mp4" />
      </video>
    </div>
  );
}

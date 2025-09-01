// src/components/VideoPage.jsx
import { useNavigate, useParams } from "react-router-dom";
import "./VideoPage.css";

// ✅ Import all videos
import bannerVideo from "../assets/banner.mp4";
import donoVideo from "../assets/dono.mp4";
import eceVideo from "../assets/ece.mp4";
import cseVideo from "../assets/cse.mp4";
import endVideo from "../assets/end.mp4";

export default function VideoPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ Get dynamic id from URL

  // ✅ Map id → video file
  const videoMap = {
    banner: bannerVideo,
    dono: donoVideo,
    ece: eceVideo,
    cse: cseVideo,
    end: endVideo,
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

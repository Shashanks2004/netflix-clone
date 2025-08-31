import { useEffect } from "react";
import "./Intro.css";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro">
      <div className="netflix-logo">
        <span className="left"></span>
        <span className="middle"></span>
        <span className="right"></span>
      </div>
    </div>
  );
}

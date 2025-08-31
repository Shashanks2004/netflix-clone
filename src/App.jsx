// App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import VideoPage from "./components/VideoPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowIntro(true);
  };

  return (
    <Router>
      <Routes>
        {/* If not logged in → show Login */}
        {!isLoggedIn && !showIntro && !showHome && (
          <Route path="/*" element={<Login onLogin={handleLogin} />} />
        )}

        {/* After login → show Intro screen */}
        {showIntro && !showHome && (
          <Route
            path="/*"
            element={
              <Intro
                onFinish={() => {
                  setShowIntro(false);
                  setShowHome(true);
                }}
              />
            }
          />
        )}

        {/* Home Page → contains Banner + routes */}
        {showHome && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/video" element={<VideoPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

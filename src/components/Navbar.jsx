// src/components/Navbar.jsx
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">NETFLIX</h1>
      <ul className="menu">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>
    </div>
  );
}

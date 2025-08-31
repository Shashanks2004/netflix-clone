import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const validEmail = "sinchana@netflix.com";
  const validPassword = "010904";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      onLogin(); // success
    } else {
      setError("❌ Access Denied! Invalid credentials.");
    }
  };

  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

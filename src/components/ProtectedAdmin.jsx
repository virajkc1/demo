import { useState } from "react";
import Admin from "./Admin";

const ProtectedAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password protection - you can change this password
  const ADMIN_PASSWORD = "admin123"; // Change this to your desired password

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <Admin />;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Access</h2>
        <p>Enter password to access admin panel</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Access Admin
          </button>
        </form>

        <div className="login-footer">
          <small>Contact the site owner for access</small>
        </div>
      </div>
    </div>
  );
};

export default ProtectedAdmin;

import React from "react";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Villa",
  "Apartment",
  "Cabin",
];

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #eee", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#2d6cdf" }}>
          <span role="img" aria-label="logo">🏠</span> StayFinder
        </div>

        {/* Search Bar */}
        <div style={{ flex: 1, margin: "0 2rem" }}>
          <input
            type="text"
            placeholder="Search destinations, properties..."
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />
        </div>

        {/* Auth Buttons */}
        <div>
          <button style={{ marginRight: "1rem", padding: "0.5rem 1.2rem", borderRadius: "20px", border: "none", background: "#2d6cdf", color: "#fff", fontWeight: "bold" }}>
            Sign In
          </button>
          <button style={{ padding: "0.5rem 1.2rem", borderRadius: "20px", border: "1px solid #2d6cdf", background: "#fff", color: "#2d6cdf", fontWeight: "bold" }}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1.5rem" }}>
        {accommodationTypes.map(type => (
          <span key={type} style={{ cursor: "pointer", color: "#555", fontWeight: 500 }}>
            {type}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;
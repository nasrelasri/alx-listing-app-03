import React from "react";

const Footer: React.FC = () => (
  <footer style={{ padding: "1rem", textAlign: "center", background: "#f5f5f5", marginTop: "2rem" }}>
    &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
  </footer>
);

export default Footer;
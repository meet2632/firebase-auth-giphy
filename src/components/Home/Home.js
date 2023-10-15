import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const navbarStyle = {
    background: "linear-gradient(to right, #9900ff, #cc80ff)",
    height: "80px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const linkStyle = {
    textDecoration: "none",
    padding: "10px",
    color: "white",
    border: "2px solid white",
    borderRadius: "5px",
    marginLeft: "10px",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div>
      <div style={navbarStyle}>
        <Link
          to="/login"
          style={{ ...linkStyle, left: 0 }}
          onMouseOver={(e) => {
            e.target.style.color = "black";
            e.target.style.background = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "white";
            e.target.style.background = "";
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{ ...linkStyle, left: "80px" }}
          onMouseOver={(e) => {
            e.target.style.color = "black";
            e.target.style.background = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "white";
            e.target.style.background = "";
          }}
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Home;

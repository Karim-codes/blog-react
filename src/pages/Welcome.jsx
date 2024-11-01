import React from "react";
import { Link } from "react-router-dom"; 
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to The Balanced Dev!</h1>
      <p>Discover a world of knowledge and insights.</p>
      <p className="tagline">Empowering Minds, One Post at a Time</p>
      <Link to="/posts">
        <button>Read Blog Posts</button>
      </Link>
      {/* <div className="scroll-down">Scroll Down</div> */}
    </div>
  );
}

export default Welcome;

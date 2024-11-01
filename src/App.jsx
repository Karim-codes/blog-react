import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./pages/Welcome";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-ccontainer">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} /> {/* New route */}
        </Routes>
      </div>
      <footer>
        <p>© {new Date().getFullYear()} The Balanced Dev. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;

// App.jsx



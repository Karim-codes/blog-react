import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../blogData.json";
import "./Posts.css";

function Posts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="posts-main-container">
      <div className="posts">
        <h2>All Blog Posts</h2>
        <div className="posts-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="post-card">
              <div className="post-content">
                <h3 className="post-title">{blog.title}</h3>
                <p className="post-body">{blog.excerpt}</p>
                <Link to={`/posts/${blog.id}`}>
                  <button className="read-more-button">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;

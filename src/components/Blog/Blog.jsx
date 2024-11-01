// Blog.jsx
import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import the CSS file
import blogData from "../blogData.json"; // Import blog data

// Blog component to display all posts
function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set blog posts from blogData (you could replace this with an API call)
    setPosts(blogData);
  }, []);

  return (
    <div className="blog-container">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

// BlogPost component to display a single post
function BlogPost({ post }) {
  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p><em>By {post.author} on {post.date}</em></p>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

export default Blog;

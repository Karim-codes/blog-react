// src/components/Post/Post.jsx
import React from "react"; // Importing React
import "./Post.css"; // Importing CSS for styling

function Post(props) { // Using a function declaration
  const post = props.post; // Getting the post object from props
  return (
    <div className="post-container">
      <h1 className="heading">{post.title}</h1> {/* Displaying the post title */}
      <img className="image" src={post.imgUrl} alt={post.title} /> {/* Displaying the post image */}
      <p>{post.body}</p> {/* Displaying the post content */}
      <div className="info">
        <h4>Written by: {post.author}</h4> {/* Displaying the author */}
      </div>
    </div>
  );
}

export default Post; // Exporting the Post component

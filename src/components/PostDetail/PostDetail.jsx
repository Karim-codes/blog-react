import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../blogData.json';
import './PostDetail.css';
import parse from 'html-react-parser';

function PostDetail() {
  const { postId } = useParams();
  const post = blogData.find((post) => post.id === parseInt(postId));

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post-detail-container">
      <div className="post-detail">
        <h2>{post.title}</h2>
        <em>{post.date}</em>
        <div className="content">
          {parse(post.content)} {/* Parses and renders HTML safely */}
        </div>
        <Link to="/posts">
          <button>Back to All Posts</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;

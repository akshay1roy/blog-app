import React from "react";
import "./post.css";
import Post from "../../components/post/Post";
// import Post from '../post?/Post'

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;

import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="" className="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c)=>(
              <span className="postCat">{c.name}</span>
            ))
          }
          
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}{" "}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;

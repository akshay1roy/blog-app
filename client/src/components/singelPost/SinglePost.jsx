import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  // console.log(path)

  useEffect(() => {
    const getPost = async () => {
     
        const res = await axios.get("http://localhost:5000/api/posts/" + path);
        // console.log(res.data);
        setPost(res.data);

        //  console.log("hello dear");
    }
    getPost()
  }, [path]);

  // console.log(location);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post && post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post ? post.title : "nahi hai"}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <Link className="link" to={`/?user=${post.username}`}> {post.username} </Link>
          </span>
          <span className="singlePostDate">
            {post && new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">
          {post && post.desc}
        </p>
      </div>
    </div>
  );
}

export default SinglePost;

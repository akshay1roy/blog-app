import React, { useEffect, useState } from "react";
import Header from "../../components//Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.css'
import axios from "axios"

function Home() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts");
      setPosts(res.data);
      // console.log(res);
    }

    fetchPosts();
  },[])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;

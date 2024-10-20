import React, { useEffect, useState } from "react";
import Header from "../../components//Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.css'
import axios from "axios"
import { useLocation } from "react-router-dom";

function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  // const location=useLocation()

  // console.log(location)

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts"+search);
      setPosts(res.data);
      // console.log(res);
    }

    fetchPosts();
  },[search])
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

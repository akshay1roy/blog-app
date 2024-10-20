import React from 'react'
import './Single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singelPost/SinglePost'

function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single

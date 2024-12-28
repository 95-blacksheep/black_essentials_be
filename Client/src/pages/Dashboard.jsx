import React, { useState } from 'react'
import {dummyPosts} from '../data'
import { Link } from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";




const Dashboard = () => {

  const [posts, setPosts] = useState(dummyPosts)

  return (
   <section className="dashboard">
    {
      posts.length > 0 ? <div className="dashboard_container">
        {
          posts.map(post => {
            return <article key={post.id} className='dashboard_post'  >
              <div className="dashboard_post_info">
                <div className="dashboard_post_thumbnail">
                  <img src={post.thumbnail} alt="Profile" />
                </div>

                <h5>{post.title}</h5>
              </div>

              <div className="dashboard_post_actions">
                <Link to={'/posts/${post.id}'} className='dashboard_post_btn' > <BsFillEyeFill /> </Link>
                <Link to={'/posts/${post.id}/edit'} className='dashboard_post_btn' ><MdEdit /></Link>
                <Link to={'/posts/${post.id}/delete'} className='dashboard_post_btn' >  <MdDeleteForever /></Link>
              </div>
            </article>
          })
        }
      </div> :  <div className="error_page">
          <h2>No post found in your dashboard!</h2>
          <div class="bar">
            <div class="ball"></div>
          </div>
        </div>
    }
   </section>
  )
}

export default Dashboard

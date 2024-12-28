import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/user_avatar.png'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/xxx'} className="post_author">
        <div className="post_author_avatar">
            <img src={Avatar} alt="User's Profile Pic" />
        </div>

        <div className="post_author_details">
            <h5>By: James Gunner</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor

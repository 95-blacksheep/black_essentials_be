import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'


const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
  
  //shorten texts in post card
  const shortDesc = desc.length > 155 ? desc.substr(0, 155) + '...' : desc;
  const shortTitle = title.length > 45 ? title.substr(0, 45) + '...' : title;
  

    return (
    <article className="post">
        <center>
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        </center>
        

        <div className="post_content">
            <Link to={`/posts/${postID}`}>
                <h4>{shortTitle}</h4>
            </Link>
            <p>{shortDesc}</p>
        </div>


        <div className="post_footer">
            <PostAuthor />
            <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
        </div>
    </article>
  )
}

export default PostItem

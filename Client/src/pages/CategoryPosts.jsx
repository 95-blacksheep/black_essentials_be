import React, { useState } from "react";

import PostItem from "../components/PostItem";

import { dummyPosts } from "../data";


const CategoryPosts = () => {

    const [posts, setPosts] = useState(dummyPosts);
  
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="posts_container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <div className="error_page">
          <h2>No Post Found!</h2>
          <div class="bar">
            <div class="ball"></div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CategoryPosts

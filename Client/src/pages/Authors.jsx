import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar1 from "../images/author.png";
import Avatar2 from "../images/author.png";
import Avatar3 from "../images/author.png";
import Avatar4 from "../images/author.png";
import Avatar5 from "../images/author.png";
import Avatar6 from "../images/author.png";
import Avatar7 from "../images/author.png";
import Avatar8 from "../images/author.png";

const authorsData = [
  { id: "1", avatar: Avatar1, name: "James Gunner Puth", posts: 4 },
  { id: "2", avatar: Avatar2, name: "Oliva Khan", posts: 3 },
  { id: "3", avatar: Avatar3, name: "Peter Pan", posts: 5 },
  { id: "4", avatar: Avatar4, name: "Spanner", posts: 6 },
  { id: "5", avatar: Avatar5, name: "grace", posts: 3 },
  { id: "6", avatar: Avatar6, name: "chavi", posts: 5 },
  { id: "7", avatar: Avatar7, name: "pally ross", posts: 6 },
  { id: "8", avatar: Avatar8, name: "dejane", posts: 2 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="authors_container">
          {authors.map(({id, avatar, name, posts}) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author_avatar">
                  <img src={avatar} alt={`${name}'s Profile`} />
                </div>

                <div className="author_info">
                  <h5>{name}</h5>
                  <small>{posts}</small>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="error_page">
          <h2>No Author Found!</h2>
          <div class="bar">
            <div class="ball"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Authors;

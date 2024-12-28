import React from "react";
import { Link } from "react-router-dom";

import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../images/Thumbnail1.png";

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className="post_detail_header">
        <PostAuthor />

        <div className="post_details_buttons">
          <Link to={"/posts/userID/edit"} className="btn category">
            Edit
          </Link>
          <Link to={"/posts/userID/delete"} className="btn_danger">
            Delete
          </Link>
        </div>
        </div>


        <h2>This is the post title</h2>

        <div className="post_detail_thumbnail">
          <img src={Thumbnail} alt="Post Image." />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, omnis
          perspiciatis harum natus quidem, magni sit perferendis fugit
          recusandae consectetur, ut veritatis soluta provident nihil maxime quo
          ullam at error.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          laborum, animi ipsa nisi autem maxime rerum quaerat consequatur
          perferendis consectetur, modi quae maiores inventore excepturi atque
          illo. Numquam hic maxime incidunt illum quibusdam laudantium magnam,
          repudiandae tenetur distinctio temporibus voluptatem unde. Quam,
          veritatis rerum et sequi aliquam laboriosam aliquid neque perferendis
          quisquam illo? Adipisci, provident? Accusamus ducimus voluptate
          commodi eveniet sed consequuntur illo maxime, animi, placeat amet
          temporibus? Placeat, natus ducimus quo, saepe quaerat expedita in vel
          vero rem itaque nemo et ab, minima nobis mollitia distinctio laborum
          soluta rerum. Accusamus debitis ducimus fugiat quis atque perspiciatis
          labore? Rem voluptas iusto vero ab facere aspernatur accusantium vitae
          quas omnis asperiores dignissimos, fugit reprehenderit eaque similique
          nihil, explicabo esse. Dolor repellat optio eius dolores cupiditate
          minima fuga beatae amet aperiam saepe ut magnam laborum laudantium
          error ullam quam maxime ducimus tenetur odio dolorum libero, deserunt
          inventore expedita voluptatibus? Veniam aliquam impedit illum quidem
          officiis, vitae mollitia iste dolor est. Totam labore ab, consequuntur
          nihil asperiores omnis recusandae reprehenderit fuga. Consectetur
          eveniet ratione deserunt consequuntur nesciunt, error voluptatum aut
          fugiat placeat. Aspernatur itaque rerum dicta, commodi harum hic
          aliquam debitis necessitatibus quia asperiores ratione doloribus
          omnis! Neque praesentium, iste id animi expedita delectus rerum
          repudiandae odit obcaecati placeat maxime ipsum soluta magnam ex
          recusandae. Odit, corporis dolores harum at tenetur qui sed rerum
          molestiae, ex repudiandae nisi, assumenda excepturi quasi temporibus.
          Ad voluptas neque distinctio possimus dicta adipisci ducimus a. Cumque
          consectetur tempore, minima veniam maxime deserunt tempora! Illum esse
          commodi alias facilis, beatae odio consequuntur similique nostrum iste
          doloribus quas aliquid, enim voluptas ullam quos ab provident,
          cupiditate asperiores deleniti quis eum nihil nobis culpa! Eius nihil
          maiores doloribus magni explicabo expedita. Sunt tempora corrupti
          ullam alias tempore beatae. Saepe omnis non eos qui deserunt soluta
          veritatis animi corporis similique asperiores?
        </p>
    </section>
  );
};

export default PostDetail;

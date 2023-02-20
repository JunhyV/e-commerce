import React from "react";
import { homeGrid } from "../../utils/homeGrid";

const Post = ({number}) => {
    const {img, link} = homeGrid[number];
  return (
    <div className="categories__post post">
      <img className="post__img" src={img} alt="categories-post-img" />
      <h1 className="post__title">{link}</h1>
    </div>
  );
};

export default Post;

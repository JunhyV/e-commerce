import React from "react";
import { Link } from "react-router-dom";
import { homeGrid } from "../utils/homeGrid";

const Home = () => {
  return (
    <div className="home">
      <h2>welcome</h2>
      <h2>Trending</h2>
      <div className="home__grid">
        {homeGrid.map((img) => (
          <Link to={`/${img.link}`} key={img.id} className="home__galery zoom">
                        <img className="home__img" src={img.img} alt="galery-img" />
            <p className="home__link link">{img.link}</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Home;

import React from "react";

const Card = ({ title, image, url }) => {
  return (
    <a href={url} className="site">
      <article>
        <div className="img-container">
          <img src={image} className="site-img" alt={title} />
        </div>

        <div className="site-title">
          <h4>{title}</h4>
        </div>
      </article>
    </a>
  );
};

export default Card;

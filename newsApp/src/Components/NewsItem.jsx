import React from "react";

const NewsItem = ({ description, title, urlToImage, articleURL }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          urlToImage ||
          "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg"
        }
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{`${title}`}</h5>
        <p className="card-text">{description || "N/A"}</p>
        <a
          href={articleURL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

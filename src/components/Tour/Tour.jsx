import React, { useState } from "react";
import "./Tour.css";

export const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="tour">
      <div className="tour-image">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
      </div>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : " read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

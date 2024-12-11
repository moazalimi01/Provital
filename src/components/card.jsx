import React from "react";
import "../styles/card.scss";

const Card = ({ imageSrc, iconSrc, statValue, statUnit, title, description }) => {
  return (
    <div className="nutrition-card">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="main-image" />
        <div className="stat-overlay">
          <img src={iconSrc} alt="Icon" className="icon" />
          <span className="stat-text">
            <span className="value">{statValue}</span>
            <span className="unit">{statUnit}</span>
          </span>
        </div>
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

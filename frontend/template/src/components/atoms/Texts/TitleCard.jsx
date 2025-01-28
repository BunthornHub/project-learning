import React from "react";

const TitleCard = ({ title, subtitle, className = "" }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default TitleCard;

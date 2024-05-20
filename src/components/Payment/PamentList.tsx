
import React from "react";

interface CardProps {
  carddate: string;
  expdate: string;
  image: string;
}

const PamentList: React.FC<CardProps> = ({ carddate, expdate, image }) => {
  return (
    <div className="part_vx">
      <p><img src={image} alt="Card image" /></p>
      <div>
        <small>Visa: <span>{carddate}</span></small>
  
        <small>Exp. date: <span>{expdate}</span></small>
      </div>
    </div>
  );
};

export default PamentList;

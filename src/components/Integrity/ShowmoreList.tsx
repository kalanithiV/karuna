import React from "react";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

interface ShowMoreListProps {
  showmore: boolean;
  clickShow: () => void;
  TotalList: Sculpture;
  sculptureList: Sculpture[];
}

const ShowMoreList: React.FC<ShowMoreListProps> = ({ showmore, clickShow, TotalList, sculptureList }) => {
  return (
    <div className="More_details">
      <button onClick={clickShow}>{showmore ? "Hide" : "More"} Details</button>
      {showmore && (
        <>
          <p>{TotalList.description}</p>
          <img src={TotalList.url} alt={TotalList.alt} />
        </>
      )}
      <ul className="fetch_Data">
        {sculptureList.map((list, index) => (
          <li key={index} style={{ textAlign: "start", lineHeight: "30px" }}>
            {list.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowMoreList;

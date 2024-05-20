import React from 'react';

interface Sculpture {
    artist: string;
    url: string;
}

interface ImgDetailsProps {
    nextClick: () => void;
    sculptureList: Sculpture[];
    TotalList: Sculpture;
    index: number;
}

const ImgDetails: React.FC<ImgDetailsProps> = ({ nextClick, sculptureList, TotalList, index }) => {
    return (
        <div className="img_details">
            <button onClick={nextClick}>Next</button>
            <h3>{index + 1} of {sculptureList.length}</h3>
            <p>{TotalList.artist}</p>
            <img src={TotalList.url} alt={TotalList.artist} />
        </div>
    );
};

export default ImgDetails;

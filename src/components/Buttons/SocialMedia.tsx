import React from 'react';
import Spotify from '../../images/spotify.png';
import Walmart from '../../images/walmart.png';
import Vodaphone from '../../images/vodaphone.png';
import Canon from "../../images/canon.png"

interface SocialMedia {
    id: number;
    image: string;
    alt?: string;
}

const socialMedias: SocialMedia[] = [
    {
        id: 1,
        image: Spotify,
        alt: 'Spotify',
    },
    {
        id: 2,
        image: Walmart,
        alt: 'Walmart',
    },
    {
        id: 3,
        image: Vodaphone,
        alt: 'Vodafone',
    },
    {
        id: 4,
        image: Canon,
        alt: 'Canon',
    },
];

const SocialMedias: React.FC = () => {
    return (
        <div className="socialmedais">
            <label>Working with the best</label>
            <ul>
                {socialMedias.map((list) => (
                    <li key={list.id}>
                        <img src={list.image} alt={list.alt} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialMedias;

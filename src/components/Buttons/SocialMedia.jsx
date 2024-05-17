
import Spotify from "../../images/spotify.png"
import Walmart from "../../images/walmart.png"
import Vodaphone from "../../images/vodaphone.png"
import Canon from "../../images/canon.png"
export default function () {


    const socialMedias = [{
        id: 1,
        image: Spotify,
        alt: 'Spotify'
    },
    {
        id: 2,
        image: Walmart
    },
    {
        id: 3,
        image: Vodaphone
    },
    {
        id: 4,
        image: Canon
    }

    ]
    return (
        <div className="socialmedais">
            <label>Working with the best</label>
            <ul>
                {socialMedias.map((list, index) => (
                    <>
                        <li key={index}><img src={list.image
                        } /></li>
                    </>

                ))}
            </ul>
        </div>

    )
}
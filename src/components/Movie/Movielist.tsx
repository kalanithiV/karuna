import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';

interface movieType {

    rating: number,
    movie: string,
    id: number,
    imdb_url: string
}
export default function Movielist({ rating, movie, id, imdb_url }: movieType) {
    return (
        <>
            <tr> 
                <td>
                    {id}
                </td>
                <td>
                        {movie}
                </td>
                <td>
                    {rating}
                </td>
                <td>
                <Link to={imdb_url} target="#">
                <button>Detail</button>
                </Link>
 </td>
            </tr>
        </>
    )
}
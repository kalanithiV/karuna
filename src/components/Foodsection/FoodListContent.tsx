import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';

interface FoodListtype {
    idMeal: number,
    strMealThumb: string,
    strArea: string,
    strMeal: string
}
export default function FoodListContent({  idMeal, strMealThumb, strArea, strMeal }: FoodListtype) {
    return (
        <Link  to={`/food-detailpage/${idMeal}`}>
            <div className='food_lists'>
                <span><img src={strMealThumb} alt="Goat" /></span>
                <p>{strMeal}
                    <label><PlaceIcon />{strArea}</label>
                </p>
            </div>
        </Link>
    )
}
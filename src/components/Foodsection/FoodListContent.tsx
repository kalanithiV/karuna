import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';

interface FoodListtype {
    index: any,
    idMeal: any,
    strMealThumb: any,
    strArea: any,
    strMeal: any
}
export default function FoodListContent({ index, idMeal, strMealThumb, strArea, strMeal }: FoodListtype) {
    return (
        <Link key={index} to={`/food-detailpage/${idMeal}`}>
            <div className='food_lists'>
                <span><img src={strMealThumb} alt="Goat" /></span>
                <p>{strMeal}
                    <label><PlaceIcon />{strArea}</label>
                </p>

            </div>
        </Link>
    )
}
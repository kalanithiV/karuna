import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
export default function FoodList({filtermeals}){
    return(
        <>
        <h2>Meals</h2>
            <div className='food_orders'>
                {filtermeals.map((item, index) => (
                    <Link key={index} to={`/food-detailpage/${item.idMeal}`}>
                        <div className='food_lists'>
                            <span><img src={item.strMealThumb} alt="Goat" /></span>
                            <p>{item.strMeal}
                            <label><PlaceIcon />{item.strArea}</label>
                            </p>

                        </div>
                    </Link>
                ))}
            </div>
        </>


    )
}
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';

interface FoodListtype{
    item:any,
    index:any
}
export default function FoodListContent({item,index}:FoodListtype){
    return(
        

<Link key={index} to={`/food-detailpage/${item.idMeal}`}>
                        <div className='food_lists'>
                            <span><img src={item.strMealThumb} alt="Goat" /></span>
                            <p>{item.strMeal}
                            <label><PlaceIcon />{item.strArea}</label>
                            </p>

                        </div>
                    </Link>
    
    )
}
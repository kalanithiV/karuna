import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import FoodListContent from "../Foodsection/FoodListContent"

interface nodatatype {
    list: any[];

}
export default function FoodList({ list }: nodatatype) {

    return (
        <>
            <h2>Meals</h2>
            {list.length == 0 ?
                <p>No Meals</p>
                : <div className='food_orders'>
                    {list.map((item, index) => (
                        <FoodListContent
                         idMeal={item.idMeal} 
                         strMealThumb={item.strMealThumb}
                          strArea={item.strArea}
                           index={index} 
                           strMeal={item.strMeal} />
                    ))}
                </div>
            }

        </>
    )
}
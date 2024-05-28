
import FoodListContent from "../Foodsection/FoodListContent"

interface FoodItem {
    idMeal: number;
    strMealThumb: string;
    strArea: string;
    strMeal: string;
  }
  
interface nodatatype {
    list: FoodItem[];
}
export default function FoodList({ list }: nodatatype) {

    return (
        <>
            <h2>Meals</h2>
            {list.length == 0 ?
                <p>No Meals</p>
                :
                 <div className='food_orders'>
                    {list.map((item:FoodItem) => (
                        <FoodListContent
                         idMeal={item.idMeal} 
                         strMealThumb={item.strMealThumb}
                          strArea={item.strArea}
                           strMeal={item.strMeal} />
                    ))}
                </div>
            }

        </>
    )
}
interface FoodImgtype {
    strMealThumb: any,
    strMeal:any
}
export default function FoodDetailImage({ strMealThumb,strMeal }: FoodImgtype) {
    return (
        <div className="detail_mealImg">
            <img src={strMealThumb} alt={strMeal} />
        </div>
    )
}
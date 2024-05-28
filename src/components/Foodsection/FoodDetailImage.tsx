interface FoodImgtype {
    strMealThumb: string,
    strMeal:number
}
export default function FoodDetailImage({ strMealThumb,strMeal }: FoodImgtype) {
    return (
        <div className="detail_mealImg">
            <img src={strMealThumb} />
        </div>
    )
}
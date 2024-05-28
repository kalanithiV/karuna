interface FoodImgtype {
    items: any
}
export default function FoodDetailImage({ items }: FoodImgtype) {
    return (
        <div className="detail_mealImg">
            <img src={items.strMealThumb} alt={items.strMeal} />
        </div>
    )
}
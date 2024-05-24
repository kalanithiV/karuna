import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import foodService from "../../api/services/foodservice";

export default function FoodDetailPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);

    const fetchDetails = async () => {
        try {
            const response = await foodService.fooddetailsbyID(id);
            console.log(response, "yyyyyyyyy")
            if (response.status === 200) {
                const data = response.data;
                setMeal(data.meals);
            } else {
                alert("rrrrr")
            }
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }
    useEffect(() => {
        fetchDetails()
    },[id])

    return (
        <div className="food_detail_page">  
            {
                meal.map((items,index)=>(
                    <>
                    <h3>{items.strMeal}</h3>
                    <div className="detail_meal" key={index}>    
                    <div className="detail_mealImg">
                        <img src={items.strMealThumb} alt={items.strMeal} />
                    </div>
                    <p>
                        <span>
                            Over 50 different nutrients are important to human health with no food providing all of the nutrients. For a food to be labeled a high source a serving must contain 20% or more of the nutrient.
                        </span>
                        <span>
                            Beef is a high source of protein, Selenium, Vitamin B-12, Phosphorus and Zinc. Beef is a good source of Niacin, Riboflavin, Iron and Vitamin B-6. A good source must contain 10% to 19% of the nutrient.
                        </span>
                        <span>
                            Zinc is critical to growth and development, immune system maintenance, wound healing, and taste acuity. Iron is critical for cognitive development, intellectual performance, a healthy pregnancy and immune defense.
                        </span>
                        <span>
                            The iron found in meat is in the form of heme iron which is better absorbed than the nonheme iron found in plant foods.
                        </span>
                        <span>
                            Selenium acts as an antioxidant which may reduce the risk of certain cancers and protect against heart disease. Phosphorus is important for formation of bones and teeth and maintenance and repair of cells.
                        </span>
                        <span>
                            As a high or good source of these important nutrients beef is an important food to include in diets.
                        </span>
                    </p>
                </div>
                    </>
                ))
            }
   
            
        </div>
    );
}

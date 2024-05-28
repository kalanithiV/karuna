import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import foodService from "../../api/services/foodservice";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Loader from "../Common/Loader"
import FoodDetailContent from "./FoodDetailContent"
import FoodDetailImage from "./FoodDetailImage"


interface MealItem {
    strMeal: number;
    strMealThumb: string;
    benifits: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strSource: string;
    strYoutube: string;
    strInstructions: string;
}


const BenifitsOffood = [
    {
        id: 1,
        benifits: "Over 50 different nutrients are important to human health with no food providing all the nutrients. For a food to be labeled a high source a serving must contain 20% or more of the nutrient"
    },
    {
        id: 2,
        benifits: "Beef is a high source of protein, Selenium, Vitamin B-12, Phosphorus and Zinc. Beef is a good source of Niacin, Riboflavin, Iron and Vitamin B-6. A good source must contain 10% to 19% of the nutrient."
    },
    {
        id: 3,
        benifits: " Zinc is critical to growth and development, immune system maintenance, wound healing, and taste acuity. Iron is critical for cognitive development, intellectual performance, a healthy pregnancy and immune defense."
    },
    {
        id: 4,
        benifits: "The iron found in meat is in the form of heme iron which is better absorbed than the nonheme iron found in plant foods."
    },
    {
        id: 5,
        benifits: "Selenium acts as an antioxidant which may reduce the risk of certain cancers and protect against heart disease. Phosphorus is important for formation of bones and teeth and maintenance and repair of cells."
    },
    {
        id: 6,
        benifits: "As a high or good source of these important nutrients beef is an important food to include in diets."
    },
]

export default function FoodDetailPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDetails = async (id:any) => {
        try {
            const response = await foodService.fooddetailsbyID(id);
            console.log(response, "yyyyyyyyy")
            if (response.status === 200) {
                const data = response.data;
                setMeal(data.meals);
            } else {
                alert("rrrrr")
            }
            setIsLoading(false)
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }

    useEffect(() => {
        if (id) {
            fetchDetails(id)

        }
        else {
            alert("Dddddddd")
        }
    }, [id])

    return (
        <div className="food_detail_page">
            <div className='Breadcrumb'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href='/'>Food List</Link>
                    <Link href='/' className="active">Food Detail Page</Link>
                </Breadcrumbs>
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                meal.map((items:MealItem, index) => (
                    <>
                        <h3>{items.strMeal}</h3>
                        <div className="detail_meal" key={index}>
                            <FoodDetailImage strMealThumb={items.strMealThumb} strMeal={items.strMeal} />
                            <FoodDetailContent BenifitsOffood={BenifitsOffood}
                                strMeal={items.strMeal}
                                benifits={items.benifits}
                                strIngredient1={items.strIngredient1}
                                strIngredient2={items.strIngredient2}
                                strIngredient3={items.strIngredient3}
                                strIngredient4={items.strIngredient4}
                                strIngredient5={items.strIngredient5}
                                strIngredient6={items.strIngredient6}
                                strSource={items.strSource}
                                strYoutube={items.strYoutube}
                                strInstructions={items.strInstructions}
                            />
                        </div>
                    </>
                ))

            )

            }
        </div>
    );
}

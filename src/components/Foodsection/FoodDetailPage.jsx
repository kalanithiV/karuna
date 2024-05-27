import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import foodService from "../../api/services/foodservice";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Spinner from "../Common/Spinner"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';


const BenifitsOffood = [
    {
    id:1,
    benifits:"Over 50 different nutrients are important to human health with no food providing all the nutrients. For a food to be labeled a high source a serving must contain 20% or more of the nutrient"
},
{
    id:2,
    benifits:"Beef is a high source of protein, Selenium, Vitamin B-12, Phosphorus and Zinc. Beef is a good source of Niacin, Riboflavin, Iron and Vitamin B-6. A good source must contain 10% to 19% of the nutrient."
},
{
    id:3,
    benifits:" Zinc is critical to growth and development, immune system maintenance, wound healing, and taste acuity. Iron is critical for cognitive development, intellectual performance, a healthy pregnancy and immune defense."
},
{
    id:4,
    benifits:"The iron found in meat is in the form of heme iron which is better absorbed than the nonheme iron found in plant foods."
},
{
    id:5,
    benifits:"Selenium acts as an antioxidant which may reduce the risk of certain cancers and protect against heart disease. Phosphorus is important for formation of bones and teeth and maintenance and repair of cells."
},
{
    id:6,
    benifits:"As a high or good source of these important nutrients beef is an important food to include in diets."
},
    
    

]

// import Link from '@mui/material/Link';
export default function FoodDetailPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false)
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }
    
    useEffect(() => {
        fetchDetails()
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

                <Spinner />
            ) : (
                meal.map((items, index) => (
                    <>
                        <h3>{items.strMeal}</h3>
                        <div className="detail_meal" key={index}>
                            <div className="detail_mealImg">
                                <img src={items.strMealThumb} alt={items.strMeal} />
                            </div>
                            <p>
                                <h3>Benifits of {items.strMeal}</h3>

                                {
                                    BenifitsOffood.map((items,index)=>(
                                        <span key={index}>{items.benifits}</span>
                                    ))
                                }
                                <h3>Instructions</h3>
                                <span>{items.strInstructions}</span>
                                <h3>Necessary Materials</h3>
                                <ol><li>{items.strIngredient1}</li>
                                    <li>{items.strIngredient2}</li>
                                    <li>{items.strIngredient3}</li>
                                    <li>{items.strIngredient4}</li>
                                    <li>{items.strIngredient5}</li>
                                    <li>{items.strIngredient6}</li>
                                </ol>
                                <div className='moredetails'>
                                    <small>Get more Details &nbsp;</small>

                                    <label>
                                        <Link href={items.strSource}>
                                            <LanguageIcon />
                                        </Link>

                                        <Link href={items.strYoutube}>
                                            <YouTubeIcon />
                                        </Link>
                                    </label>
                                </div>


                            </p>
                        </div>
                    </>
                ))

            )

            }





        </div>
    );
}

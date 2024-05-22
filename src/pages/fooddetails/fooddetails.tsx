import * as React from 'react';
import Lemonimg from "../../images/lemon.png";
import "../fooddetails/food.css";
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Beef from "../../images/beef.jpeg";
import Chicken from "../../images/chicken.jpeg";
import Lamp from "../../images/lamp.jpeg";
import Dessert from "../../images/dessert.jpeg"
import Miscellaneous from "../../images/Miscellaneous.jpeg";
import Pasta from "../../images/Pasta.jpeg";
import Pork from "../../images/Pork.jpeg";
import Seafood from "../../images/Seafood.jpeg"
import axios from 'axios';
import Side from "../../images/Side.jpeg";
import Starter from "../../images/Starter.jpeg"
import Vegan from "../../images/Vegan.jpeg";
import Vegetarian from "../../images/Vegetarian.jpeg";
import Breakfast from "../../images/Pork.jpeg";
import Goat from "../../images/Goat.jpeg";
import foodService from "../../api/services/foodservice"
import Link from '@mui/material/Link';
const Fooddetails: React.FC = () => {
    const [list, setList] = React.useState([""]);
    const fetchDetails = async () => {
        try {
          const response = await foodService.fooddetails();
          console.log(response,"yyyyyyyyy")
          if (response.status === 200) {
            const data = response.data;
            setList(data.categories);
          } else {
            alert("rrrrr")
          }
        } catch (error) {
          console.error("Fetch error: ", error);
        }
      }
    // axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    // .then((response) => {
    //     if (response.status === 200) {
    //         return response.data;
    //     } else {
    //         throw new Error('Network response was not ok.');
    //     }
    // })
    // .then((data) => {
    //     setList(data.categories);
    // })
    // .catch((error) => {
    //     console.error("Fetch error: ", error);
    // });

//     const fetchCategories = () => {
//    return  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then((data) => {
//         setList(data.categories);
//     })
//     .catch((error) => {
//         console.error("Fetch error: ", error);
//     });
// }
    React.useEffect(() => {
        // fetchCategories()
        fetchDetails()
    }, []);

    return (
        <div className='food_Details'>
            <div className="top_details">
                <SearchTwoToneIcon />
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" />
            </div>

            <div className='food_orders'>
                {
                    list.map((item: any, index) => (
                        <div className='food_lists'>

                            <div key={index}>
                                <span>{item.strCategory === "Beef" ? <img src={Beef} /> :
                                    item.strCategory === "Chicken" ? <img src={Chicken} /> :
                                        item.strCategory === "Dessert" ? <img src={Dessert} />: 
                                        item.strCategory === "Lamb" ? <img src={Lamp} /> : 
                                        
                                        item.strCategory === "Miscellaneous" ? <img src={Miscellaneous} /> :
                                    item.strCategory === "Pasta" ? <img src={Pasta} /> :
                                        item.strCategory === "Pork" ? <img src={Pork} />: 
                                        item.strCategory === "Seafood" ? <img src={Seafood} /> :

                                        item.strCategory === "Side" ? <img src={Side} />: 
                                        item.strCategory === "Starter" ? <img src={Starter} /> : 
                                        
                                        item.strCategory === "Vegan" ? <img src={Vegan} /> :
                                    item.strCategory === "Vegetarian" ? <img src={Vegetarian} /> :
                                        item.strCategory === "Breakfast" ? <img src={Breakfast} />: 
                                        item.strCategory === "Goat" ? <img src={Goat} /> 
                                        :
                                        ""

                                }
                                </span>
                                <p>{item.strCategory}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default Fooddetails;

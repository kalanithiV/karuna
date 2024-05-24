
import * as React from 'react';
import { Link } from 'react-router-dom';
import "../fooddetails/food.css";
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import foodService from "../../api/services/foodservice";
import PlaceIcon from '@mui/icons-material/Place';
const Fooddetails: React.FC = () => {
    const [list, setList] = React.useState<any[]>([]);
    const [search, setSearch] = React.useState<string>("");
    const fetchDetails = async () => {
        try {
            const response = await foodService.fooddetails();
            console.log(response, "yyyyyyyyy")
            if (response.status === 200) {
                const data = response.data;
                setList(data.meals);
            } else {
                alert("rrrrr")
            }
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }
    const searchMeals = (e: any) => {
        setSearch(e.target.value);
        console.log(e.target.value, "mealsss");
    }

    const filtermeals = list.filter((item: any) => (
        item.strMeal && item.strMeal.toLowerCase().includes(search)
    ));

    React.useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className='food_Details'>
            <div className="top_details">
                <SearchTwoToneIcon />
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" onChange={searchMeals} />
            </div>

            <div className='food_orders'>
                {filtermeals.map((item: any, index: any) => (
                    <Link key={index} to={`/food-detailpage/${item.idMeal}`}>
                        <div className='food_lists'>
                            <span><img src={item.strMealThumb} alt="Goat" /></span>
                            <p>{item.strMeal}
                            <label><PlaceIcon />{item.strArea}</label>
                            </p>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Fooddetails;


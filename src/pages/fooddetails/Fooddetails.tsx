
import * as React from 'react';
import "../fooddetails/food.css";
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import foodService from "../../api/services/foodservice";
import FoodList from "../../components/Foodsection/FoodList"
import Loader from "../../components/Common/Loader"
import { useState, useEffect } from "react";

export default function Fooddetails() {
    const [list, setList] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true)

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
            setIsLoading(false)
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }

    const searchMeals = (e: any) => {
        setSearch(e.target.value);
        console.log(e.target.value, "mealsss");
    }

    // const filtermeals = list.filter((item: any) => (
    //     item.strMeal && item.strMeal.toLowerCase().includes(search)
    // ));

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className='food_Details'>
            <div className="top_details">
                <SearchTwoToneIcon />
                <TextField id="outlined-basic" label="Search the meal" variant="outlined" size="small" onChange={searchMeals} />
            </div>
            {
                isLoading ?
                    <Loader /> :
                    <FoodList list={list} />

            }

        </div>
    );
}

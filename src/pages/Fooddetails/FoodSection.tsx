
import * as React from 'react';
import "./food.css";
import TextField from '@mui/material/TextField';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import foodService from "../../api/services/foodservice";
import FoodList from "../../components/Foodsection/FoodList"
import Loader from "../../components/Common/Loader"
import { useState, useEffect } from "react";

export default function Fooddetails() {
    const [list, setList] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

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

    const searchMeals = async (e:any) => {
        const SerachItem = e.target.value;
        setSearch(SerachItem);
        if (SerachItem === "") {
            fetchDetails();
            return;
        }

        try {
            const response = await foodService.searchMeals(SerachItem);
            if (response.status === 200) {
                const data = response.data;
                setList(data.meals || []); 
                console.log("Eeeeeeeeee",data)
                // if(data.meals === null ){
                //     alert("varataaaaa")
                // }
                // else{
                //     console.log("ffff")
                // }
            } else {
                alert("Failed to search meals");
                console.log("Failed to search meals")

            }
        } catch (error) {
            console.error("Search error: ", error);
        }
    };

    useEffect(() => {
        
        fetchDetails();
    }, []);

    return (
        <div className='food_Details'>
            <div className="top_details">
                <SearchTwoToneIcon />
                <TextField id="outlined-basic" label="Search the meal" variant="outlined" size="small" onChange={searchMeals} />
            </div>
            {isLoading ?<Loader /> : <FoodList list={list} />}
        </div>
    );
}

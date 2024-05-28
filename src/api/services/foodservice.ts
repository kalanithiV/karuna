import axios from 'axios';
import React from 'react';

// get api
  const fooddetails = async() =>{
    return await axios.get("https://themealdb.com/api/json/v1/1/search.php?s=")
  } 
// Search
  const searchMeals = async (query: string) => {
    return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
};

  const fooddetailsbyID = async (id:Number) => {
    return await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }


export default  {fooddetails,fooddetailsbyID,searchMeals}
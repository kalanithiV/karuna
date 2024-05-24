import axios from 'axios';
import React from 'react';

  const fooddetails = async() =>{
    return await axios.get("https://themealdb.com/api/json/v1/1/search.php?s=")


  } 
  const fooddetailsbyID = async (id:Number) => {
    return await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }


export default  {fooddetails,fooddetailsbyID}
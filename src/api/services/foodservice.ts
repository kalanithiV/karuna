import axios from 'axios';
import React from 'react';


// class FoodService {
//     async fooddetails() {
//         return await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
//       }  
// }


// export default new FoodService()





  const fooddetails = async() =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")

  } 


export default  {fooddetails}
import React, { useEffect, useState } from "react";
import employeeService from "../../api/services/movieService";
import "../Employees/movie.css";
import { Link } from "react-router-dom";
import Movielist from "../../components/Movie/Movielist"
interface employeetype {
    rating: number,
    imdb_url: string,
    image: string,
    id: number,
    movie: string
}

export default function EmployeeDetails() {
    const [list, setList] = useState<employeetype[]>([]);
    console.log(list, "rrrrrrrrr")
    const fetchDetails = async () => {
        try {
            const response = await employeeService.Moviedetails();
            console.log(response, "rrrrrrrr");
            const data = response.data;
            setList(data);
        } catch (error) {
            alert("API not working");
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="movie_list">
        <h3>IMDB Rating Movies</h3>
            <table>
                <tr><th>S no</th>
                    <th>Movie</th>
                    <th>rating</th>
                    <th>Click here</th>

                </tr>
                {
                    list.length !==0 ?
                    (
                        list.map((movielist, index) => (
                            <Movielist imdb_url={movielist.imdb_url} id={movielist.id} movie={movielist.movie} rating={movielist.rating}/>
                                                ))
                    ):<p>No Data</p>
                }
            


            </table>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../constants/Enviroment";
import { Link } from "react-router-dom";
import "./Movies.css"



const Movies = () => {

    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        const showMovies = async () => {
            const response = await axios.get(`${config.apiUrl}`);
            setAllMovies(response.data)
        }
        showMovies()
    }, [])

    return (
        <div className="movies__container">
            {(
                allMovies.map((item) => (
                    <Link to={`/moviedata/${item.id}`} key={item.id}>
                        <img className="card__movie" src={item.image} ></img>
                    </Link>
                ))
            )
            }
        </div>
    )
}

export default Movies;
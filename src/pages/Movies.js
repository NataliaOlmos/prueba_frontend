import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../constants/Enviroment";
import { Link } from "react-router-dom";
import "./Movies.css"
import Loader from "../components/Loader";


const Movies = () => {

    const [allMovies, setAllMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const showMovies = async () => {
            setLoading(true)
            const response = await axios.get(`${config.apiUrl}`);
            setLoading(false)
            setAllMovies(response.data)
        }
        showMovies()
    }, [])

    return (
        <div className="movies__container">
            {loading && <Loader />}
            {(
                allMovies.map((item) => (
                    <Link to={`/moviedata/${item.id}`} key={item.id}>
                        <img className="card__movie" src={item.image} alt={item.title}></img>
                    </Link>
                ))
            )
            }
        </div>
    )
}

export default Movies;
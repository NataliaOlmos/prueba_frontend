import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieData.css"
import config from "../constants/Enviroment";
import axios from "axios";
import Loader from "../components/Loader";



const MovieData = () => {
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getMovieData = async () => {
            setLoading(true)
            const response = await axios.get(`${config.apiUrl}/${id}`);
            setLoading(false)
            setMovieInfo(response.data)
        }
        getMovieData()
    }, [id])

    return (
        <div>
            <div className="container__movie-data">
                <div className="image__card-container">
                    {loading && <Loader />}
                    <img className="movie__poster"
                        src={movieInfo.image} alt={movieInfo.title} />
                </div>
                <div className="data__card">
                    <span>Directed by:</span><p> {movieInfo.director}</p>
                    <p>{movieInfo.description}</p>
                    <ul>
                        <li> <span>Year of production: </span>{movieInfo.release_date}</li>
                        <li> <span>Runtime: </span>{movieInfo.running_time} minutes</li>
                        <li><span>Rating: </span>{movieInfo.rt_score}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieData;
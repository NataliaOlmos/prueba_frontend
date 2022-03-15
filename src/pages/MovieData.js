import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../constants/Enviroment";
import axios from "axios";


const MovieData = () => {
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        const getMovieData = async () => {
            const response = await axios.get(`${config.apiUrl}/${id}`);

            setMovieInfo(response.data)
            console.log(response.data)
        }
        getMovieData()
    }, [id])

    return (
        <p key={movieInfo.id}>{movieInfo.title}</p>
    )
}

export default MovieData;
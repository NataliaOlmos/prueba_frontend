import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "../components/Card";
import config from "../constants/Enviroment";
import { Link } from "react-router-dom";


const Search = () => {
    const [movies, setMovies] = useState([])
    const [movieMatch, setMovieMatch] = useState([])

    useEffect(() => {
        const loadMovies = async () => {
            const response = await axios.get(`${config.apiUrl}`);
            setMovies(response.data)
            console.log(response.data)
        }
        loadMovies()
    }, [])

    console.log(movies)

    const searchMovies = (text) => {
        if (!text) {
            setMovieMatch([])
        } else {
            let matches = movies.filter((movie) => {
                const regex = new RegExp(`${text}`, "gi");
                return movie.title.match(regex);
                console.log(movie.title)
            })
            setMovieMatch(matches);
        }
    }

    return (
        <div><input placeholder="Buscar película"
            onChange={(e) => searchMovies(e.target.value)}
        />
            {(
                movieMatch && movieMatch.map((item) => (
                    <Link to={`/moviedata/${item.id}`}>
                        <SearchCard result={item} key={item.id} />
                    </Link>
                ))
            )
            }
        </div >
    )
}

export default Search;
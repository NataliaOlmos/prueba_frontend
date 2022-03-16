import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCard from "../components/Card";
import config from "../constants/Enviroment";
import { Link } from "react-router-dom";
import "./Search.css"


const Search = () => {
    const [movies, setMovies] = useState([])
    const [movieMatch, setMovieMatch] = useState([])

    useEffect(() => {
        const loadMovies = async () => {
            const response = await axios.get(`${config.apiUrl}`);
            setMovies(response.data)
        }
        loadMovies()
    }, [])


    const searchMovies = (text) => {
        if (!text) {
            setMovieMatch([])
        } else {
            let matches = movies.filter((movie) => {
                const regex = new RegExp(`${text}`, "gi");
                return movie.title.match(regex);
            })
            setMovieMatch(matches);
        }
    }

    return (
        <div className="input__container">
            <input className="search__input" placeholder="Search Film..."
                onChange={(e) => searchMovies(e.target.value)}
            />
            {
                (
                    movieMatch && movieMatch.map((item) => (
                        <Link className="link__movie" to={`/moviedata/${item.id}`} key={item.id}>
                            <SearchCard result={item} key={item.id} />
                        </Link>)
                    )
                )
            }
        </div >
    )
}

export default Search;
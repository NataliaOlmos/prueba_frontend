import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import axios from "axios";


const Search = () => {
    const [movies, setMovies] = useState([])
    const [movieMatch, setMovieMatch] = useState([])

    useEffect(() => {
        const loadMovies = async () => {
            const response = await axios.get("https://ghibliapi.herokuapp.com/films");
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
            {movieMatch && movieMatch.map((item, id) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <div key={item.id} >
                            <img src={item.image} style={{ height: "10%", width: "15%", boderRadius: "50%" }}></img>
                            Movie:{item.title}
                        </div>
                    </Card.Body>
                </Card>
            ))
            }
        </div >
    )
}

export default Search;
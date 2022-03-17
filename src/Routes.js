import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieData from "./pages/MovieData";
import Movies from "./pages/Movies";
import Search from "./pages/Search";

function Routesone() {
    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/moviedata/:id" element={<MovieData />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>

    )
}

export default Routesone;
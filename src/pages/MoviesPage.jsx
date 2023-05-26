import React from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
    return (
        <>
        <h1>Movies</h1>
        <div
            style={{
                display: "flex",
            }}
        >
            <MoviesList />
            <Outlet />
        </div>
        </>
    )
}

export default MoviesPage
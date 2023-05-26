import React from "react";
import {movies} from "../../movie-database"
import { Link } from "react-router-dom";
import "./moviesList.css"

const MoviesList = () => {
    return (
        <>
        <h1>Movies List</h1>
        <div className="moviesListContainer">
            {
                movies.map((film) => {
                    return(
                        <Link key={film.id} to={`/movies/${film.id}`}>
                        {film.title}
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}

export default MoviesList
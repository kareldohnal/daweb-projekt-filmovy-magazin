import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
    return (
        <div className={"menuContainer"}>
            <Link to={"/"}>Homepage</Link>
            <Link to={"/articles"}>Articles</Link>
            <Link to={"/reviews"}>Reviews</Link>
            <Link to={"/movies"}>Movies</Link>
        </div>
    )
}

export default Menu
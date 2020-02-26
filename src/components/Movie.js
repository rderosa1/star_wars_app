import React from 'react'
import { Link } from 'react-router-dom'


export default function Movie(props){
    return (
        <div className = "movieComponent">
            <h5>Director: {props.filmProps.director}</h5>
            <h5>Producer(s): {props.filmProps.producer}</h5>
            <h5> Release Date: {props.filmProps.release_date}</h5>

            <Link to = {`/characters/${props.filmProps.episode_id}`}>
                <button >Characters featured in this movie</button>
            </Link>

            <Link to = {`/featuredPlanets/${props.filmProps.episode_id}`}>
                <button>Planets featured in this Movie</button>
            </Link>
        

        </div>
    )
}
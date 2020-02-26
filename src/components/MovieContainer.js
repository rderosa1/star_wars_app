import React from 'react'
import Movie from './Movie'

export default function MovieContainer(props){
    return (
    <div className = "MovieContainer">
        <h1>Star Wars Movies</h1>
        {props.starWarsFilms.map((film, index) => {
            return (
                <div className = "movieTitle" key = {index}>
                 
                 <h1>{film.title}</h1>

                <Movie 
                filmProps={film}
                />

                </div>
            )
        })}

    </div>
    )
}
import React from 'react'
import Movie from './Movie'

export default function MovieContainer(props){
    return (
    <div className = "MovieContainer">
        <h1><span className = "main-title">Star Wars Movies</span></h1>
        
        {/* {props.starWarsFilms.length >= 1 ? (props.starWarsFilms.map(() => {
            return (
                <div className = "movieTitle" key = {index}>
                    <h1>{film.title}</h1>
                    <Movie
                    filmProps={film}
                    />
                </div>
            )
        }))
        :
        (< img src = 'https://media.giphy.com/media/2WjpfxAI5MvC9Nl8U7/giphy.gif' alt = "loading spinner"/>)
        } */}
        
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
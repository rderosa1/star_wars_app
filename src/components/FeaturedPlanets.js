import React, { Component } from 'react';
import Axios from 'axios';


export default class FeaturedPlanets extends Component {
  state = {
    featuredPlanets: []
    }
      
      componentDidMount = async () => {
        const selectedMovie = this.props.starWarsPlanets.find((movie) => {
          return parseInt(movie.episode_id) === parseInt(this.props.match.params.id)
        })
        console.log(selectedMovie.planets)

        selectedMovie.planets.map(async(url) => {
          const response = await Axios.get(url)
          console.log(response.data.climate)

          this.setState(prevState => ({
            featuredPlanets: [...prevState.featuredPlanets, response.data]
          }))
        })

      }

    render(){
      return(

        <div className = "featuredPlanets">
          <h1>Planets from this Movie</h1>
              
              <div>
                <h2>

                  {this.state.featuredPlanets.length >= 1 ?
                  (this.state.featuredPlanets.map((planet, index) => {
                    return(
                      <div key = {index}> 
                        <p>Name: {planet.name}</p>
                        <p>Climate: {planet.climate}</p> 
                        <p>Population: {planet.population}</p>
                        <br/>
                      </div>
                    )
                  }))
                  :
                  (< img src = 'https://cdn.dribbble.com/users/97086/screenshots/581543/saber_load_ani.gif' alt = "loading spinner"/>)
                  }
                
                </h2>
              </div>
         
        </div>
      
        )
    }
  
  }
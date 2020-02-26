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
          console.log(response.data.name)

          this.setState(prevState => ({
            featuredPlanets: [...prevState.featuredPlanets, response.data.name]
          }))
        })

      }

    render(){
      return(

        <div className = "featuredPlanets">
          <h1>Planets from this Movie</h1>
              
              <div>
                <h2>
                  
                  {/* {this.state.featuredPlanets.map((planet, index) => {
                    return(
                      <div key = {index}> 
                        {planet} 
                      </div>
                    )
                  })} */}


                  {this.state.featuredPlanets.length >= 1 ?
                  (this.state.featuredPlanets.map((planet, index) => {
                    return(
                      <div key = {index}> 
                        {planet} 
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

  // {this.state.AllCharactersList.length >= 1 ?
//     (this.state.AllCharactersList.map((character, index) => {
//         return(
//             <div key = {index}>
//                 {character.name}
//             </div>
//         )
//     }))
//     : 
//     (< img src = 'https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif' alt = "loading spinner"/>)
//     }
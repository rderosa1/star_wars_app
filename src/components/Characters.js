import React from 'react'
import Axios from 'axios'

export default class Characters extends React.Component {
    state = {
        characters : []
    }

    componentDidMount = async () => {
        console.log(this.props.starWarsCharacters)
        
        const selectedMovie = this.props.starWarsCharacters.find((movie) => {
            return parseInt(movie.episode_id) === parseInt(this.props.match.params.id)
        })    
        console.log(selectedMovie.characters)

        selectedMovie.characters.map(async(url) => {
            const response = await Axios.get(url)
            console.log(response.data.name)

            this.setState(prevState => ({
                characters: [...prevState.characters, response.data.name]
              }))
        })

    } 


      

    render(){
        return(
            <div className = "characters">

                <h1>Characters in this Movie</h1>
                <h2>
                  

                    {this.state.characters.length >= 1 ?
                    this.state.characters.map((character, index) => {
                        return(
                          <div key = {index}> 
                            {character} 
                          </div>
                        )
                      })
                      :
                      (< img src = 'https://www.downgraf.com/wp-content/uploads/2014/09/03-yodaloader.gif' alt = "loading spinner"/>)

                    }

                  {/* {this.state.characters.map((character, index) => {
                    return(
                      <div key = {index}> 
                        {character} 
                      </div>
                    )
                  })} */}
                
                </h2>
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
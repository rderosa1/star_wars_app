import React from 'react'
import axios from 'axios'

export default class AllCharacters extends React.Component { 
    state = {
        AllCharactersList : []
    }


    async componentDidMount(){
        try { 
            const characterResponse = await axios.get('https://swapi.co/api/people')
            const characterResponse2 = await axios.get('https://swapi.co/api/people/?page=2')
            const characterResponse3 = await axios.get('https://swapi.co/api/people/?page=3')
            const characterResponse4 = await axios.get('https://swapi.co/api/people/?page=4')
            const characterResponse5 = await axios.get('https://swapi.co/api/people/?page=5')
            const characterResponse6 = await axios.get('https://swapi.co/api/people/?page=6')
            const characterResponse7 = await axios.get('https://swapi.co/api/people/?page=7')
            const characterResponse8 = await axios.get('https://swapi.co/api/people/?page=8')
            const characterResponse9 = await axios.get('https://swapi.co/api/people/?page=9')
            
            console.log(characterResponse)

            const TotalResponse = characterResponse.data.results.concat(characterResponse2.data.results,characterResponse3.data.results, characterResponse4.data.results, characterResponse5.data.results, characterResponse6.data.results, characterResponse7.data.results, characterResponse8.data.results, characterResponse9.data.results)
            
            this.setState({
                AllCharactersList : TotalResponse
            })

        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <div className = "allCharacters">
              <h1> Star Wars Characters </h1>

              {this.state.AllCharactersList.length >= 1 ?
                (this.state.AllCharactersList.map((character, index) => {
                    return(
                        <div className = "character-name" key = {index}>
                            {character.name}
                        </div>
                    )
                }))
                : 
                (< img src = 'https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif' alt = "loading spinner"/>)
                }

            </div>
        )
    }
}
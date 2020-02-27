import React from 'react'
import axios from 'axios'

export default class Planets extends React.Component {
    state = {
        AllPlanets : []
    }

        async componentDidMount(){
            try { 
                const planetResponse = await axios.get("https://swapi.co/api/planets")
                const planetResponse2 = await axios.get("https://swapi.co/api/planets/?page=2")
                const planetResponse3 = await axios.get("https://swapi.co/api/planets/?page=3")
                const planetResponse4 = await axios.get("https://swapi.co/api/planets/?page=4")
                const planetResponse5 = await axios.get("https://swapi.co/api/planets/?page=5")
                const planetResponse6 = await axios.get("https://swapi.co/api/planets/?page=6")

                console.log(planetResponse2.data.results)

                const totalPlanets = planetResponse.data.results.concat(planetResponse2.data.results, planetResponse3.data.results, planetResponse4.data.results, planetResponse5.data.results, planetResponse6.data.results)

                this.setState({
                    AllPlanets : totalPlanets
                })

            } catch (error) {
                console.log(error)
            }
            
        }

      

    render(){
        return(

            <div className = "allPlanets">
                <h1>Star Wars Planets</h1>

                {this.state.AllPlanets.length >= 1 ?
                (this.state.AllPlanets.map((planet, index) => {
                    return(
                        <div className = "planet-name" key = {index}>
                            {planet.name}
                        </div>
                    )
                }))
                : 
                (< img src = 'https://media.giphy.com/media/2WjpfxAI5MvC9Nl8U7/giphy.gif' alt = "loading spinner"/>)
                }

            </div>
        
        )
    }
}
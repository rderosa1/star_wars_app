import React from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import MovieContainer from './components/MovieContainer'
import AllCharacters from './components/AllCharacters'
import Planets from './components/Planets'
import Characters from './components/Characters'
import FeaturedPlanets from "./components/FeaturedPlanets"
import NoMatch from './components/NoMatch'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      starWarsMovies: []
    }
  }

  async componentDidMount(){      
      try {
        const response = await axios.get('https://swapi.co/api/films')
        console.log(response.data.results)

        this.setState({
          starWarsMovies : response.data.results
        })

      } catch (error) {
        
      }

  }

  render(){
    return(
      
      <div className = "HomePage">
      
      <Header />

      <Switch>
      
          <Route exact path = "/" 
          render = {(props) => < MovieContainer {...props} starWarsFilms = {this.state.starWarsMovies}/>}
          />
          

          <Route 
          path = "/allCharacters"
          render = { (props) => < AllCharacters {...props} starWarsCharacters = {this.state.starWarsMovies}/>}
          />

          <Route 
          path = "/characters/:id"
          render = { (props) => < Characters {...props} starWarsCharacters = {this.state.starWarsMovies}/>}
          />


          <Route 
            path = "/planets/"
            render = { (props) => <Planets {...props}  starWarsPlanets = {this.state.starWarsMovies} /> }
          />


          <Route
          path = "/featuredPlanets/:id"
          render = {(props) =>
          <FeaturedPlanets 
          starWarsPlanets = {this.state.starWarsMovies}
          {...props}     
          /> 
            } 
          />

          <Route path={"*"} component={NoMatch} />

      </Switch>

      <footer>
        <div>May the Schwartz be With you!</div>
      </footer>

      </div>
    )
  }

}

export default App
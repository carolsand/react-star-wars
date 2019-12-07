import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getAllStarships } from './services/sw-api';
import StarshipPage from './pages/StarshipPage';
import Starship from './components/Starship';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starships: [],
      pilots: [],
    }
  }

  async componentDidMount() {
    const shipData = await getAllStarships();
    this.setState({
      starships: shipData.results,
    });
  }

  upPilots = (p) => {
    this.setState({pilots: p})
  }

  render() {
    return (
      <div>
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
        <Route exact path="/" render = { props => 
        <Starship
          starships={this.state.starships}
        />
        }/>
        <Route path="/:id" render={ props =>
        <StarshipPage
          {...props}
          starship={this.state.starships[props.match.params.id]}
          upPilots={this.upPilots}
          pilots={this.state.pilots}
        />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;

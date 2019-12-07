import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css'
import { getPilots } from '../services/sw-api';
import Pilots from '../components/Pilots';

class StarshipPage extends React.Component {

  async componentDidMount() {
    let pilotObj = await getPilots(this.props.starship.pilots);
    this.props.upPilots(pilotObj)
  }
  render() {
    const isPilots = this.props.pilots;
    return (
      <div className="StarshipPage-container">
      <div className="StarshipPage-div">
        <h4>NAME: {this.props.starship.name}</h4>
        <h4>MODEL: {this.props.starship.model}</h4>
        <Link to='/'>RETURN</Link>
      </div>
      <div className="StarshipPage-div">
      { isPilots.length > 1 ? (
        <Pilots pilots={isPilots} />
      ) : (
        <h3>No pilots...</h3>
      )}
      </div>
    </div>
  );
}
}

export default StarshipPage;

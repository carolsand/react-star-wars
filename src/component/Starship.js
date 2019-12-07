import React from 'react';
import { Link } from 'react-router-dom';
import './Starship.css'

const Starship = (props) => {
  return (
    <div className="Starship-container">
      {props.starships.map((ships, idx) => 
      <Link to={`/${idx}`}>
        <div
        className="Starship-div"
        key={idx}
        >
        <h3>{ships.name}</h3>
        </div>
      </Link>
      )}
    </div>
  );
}

export default Starship;

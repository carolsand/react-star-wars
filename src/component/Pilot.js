import React from 'react';

const Pilots = (props) => {
  return (
    <div>
      <h3>PILOTS</h3>
      {props.pilots.map((pilot, idx) =>
        <li>{pilot.name}</li>
      )}
    </div>
  );
}

export default Pilots;

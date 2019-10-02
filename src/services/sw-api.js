const url = 'https://swapi.co/api/starships/';

export function getAllStarships() {
  return(
    fetch(url, { mode: 'cors'})
    .then(res => res.json())
  )};
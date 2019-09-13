import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

const Display = () => {
      // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      const person = response.data.results;
      console.log('Star Wars Person', person);
      setCharacters(person);
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
  }, []);

  return (
      <div className="character">
          {characters.map(item => {
              return ( 
              <StarWarsCard name={item.name} mass={item.mass}/> 
              );
          })}
          </div>
  );
}
export default Display;
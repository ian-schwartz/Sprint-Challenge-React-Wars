import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import StarWarsCard from "./StarWarsCard";

const StyledDisplay = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 100px;
`;

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
      <StyledDisplay>
          {characters.map(item => {
              return ( 
              <StarWarsCard name={item.name} birth_year={item.birth_year} hair_color={item.hair_color} eye_color={item.eye_color} height={item.height} mass={item.mass}/> 
              );
          })}
          </StyledDisplay>
  );
}
export default Display;
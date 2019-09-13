import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    height: 300px;
    width: 200px;
    border: 4px solid black;
    border-radius: 10px;
    margin: 5px;
`;

const StyledName = styled.h2`
    text-decoration: underline;
`;

const StarWarsCard = props => {
    return (
        <StyledCard>
            <StyledName>{props.name}</StyledName>
            <p>Born in {props.birth_year}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </StyledCard>
    );
};
export default StarWarsCard;
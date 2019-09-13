import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    height: 450px;
    width: 200px;
    border: 4px solid #303030;
    border-radius: 10px;
    margin: 0px 20px 20px 20px;
    padding: 10px;
`;

const StyledName = styled.h2`
    text-decoration: underline;
    font-size: 2rem;
`;

const StyledText = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
`;

const StarWarsCard = props => {
    return (
        <StyledCard>
            <StyledName>{props.name}</StyledName>
            <StyledText>Born in: {props.birth_year}</StyledText>
            <StyledText>Hair Color: {props.hair_color}</StyledText>
            <StyledText>Eye Color: {props.eye_color}</StyledText>
            <StyledText>Height: {props.height}</StyledText>
            <StyledText>Mass: {props.mass}</StyledText>
        </StyledCard>
    );
};
export default StarWarsCard;
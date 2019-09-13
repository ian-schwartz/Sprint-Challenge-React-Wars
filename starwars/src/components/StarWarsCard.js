import React from "react";

const StarWarsCard = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.mass}</p>
        </div>
    );
};
export default StarWarsCard;
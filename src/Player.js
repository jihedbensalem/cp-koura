import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = (props) => {
return (
        <Card style={{display: "flex", flexWrap: "wrap", width: "25rem", margin: "0px", border: "2px solid", borderRadius: "7px", cursor:"pointer" }}>
    <Card.Img variant="top" src={props.image} alt={props.name} />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Team: {props.team}<br />
        Nationality: {props.nationality}<br />
        Jersey Number: {props.jerseyNumber}<br />
        Age: {props.age}
        </Card.Text>
    </Card.Body>
    </Card>
);
};

export default Player;
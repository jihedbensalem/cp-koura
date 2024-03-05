import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
return (
    <div style={{ display: "flex", justifyContent:"space-between",  margin: "2rem" }}>
    {players.map((player, index) => (
        <Player key={index} {...player} />
    ))}
    </div>
);
};

export default PlayersList;
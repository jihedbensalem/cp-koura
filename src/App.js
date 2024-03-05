import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color : 'red' , margin : '3rem'}}>  Player Cards</h1>
      <div className="divcard">
      <PlayersList />
      </div>
    </div>
  );
}

export default App;
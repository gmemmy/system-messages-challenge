import React from 'react';
import './App.css';
import cardDetails from './constants';

function App() {
  return (
    <div className="App">
      {cardDetails.map(item =>
        <div className="card" style={{ backgroundColor: item.backgroundColor }}>
          <h2>{item.title}</h2>
          <p></p>
          <p className="content">{item.content}</p>
          <button style={{ color: item.backgroundColor }}>
            {item.buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import React from 'react';
import data from '../../Data/Data.json';
import "./Logs.css"

function App() {
  return (
    <div className='notes-container'>
      {data.map((item) => (
        <div className='note' key={item.id}>
            <div className='note-content'>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <p>{item.date}</p>
            </div>
          
        </div>
      ))}
    </div>
  );
}

export default App;

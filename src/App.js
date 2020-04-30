import React from 'react';
import './Main.css';
import TravelChoice from './components/TravelChoice'


function App() {
  return (
  <>
  <header className='headerSalon'>
      <h2 id='triproulette'> Trip Roulette </h2>
  </header>
    <div className='tv'>
        
          <TravelChoice />

    </div>
  <footer className='footerSalon'> 
    <p id='footer'>Trip Roulette made by JB, Antho, Nadir & Jo</p>
  </footer>
  
  </>
  );
}

export default App;

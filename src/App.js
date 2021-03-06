import React from 'react';
import './Main.css';
import Modal from "./components/Modal"
import Router from './Router';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <header className="headerSalon">
        <Link to="/">
          <h2 className="triproulette"> Trip Roulette </h2>
        </Link>
      </header>
      <div>
        <Router />
        <Modal />
      </div>
      <footer className="footerSalon">
        <p id="footer">Trip Roulette made by JB, Antho, Nadir & Jo</p>
      </footer>
    </>
  );
}

export default App;
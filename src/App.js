import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import EventListingPage from './EventListingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">Communion App</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

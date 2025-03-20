import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <Link to="/events" className="cta-button">Explore Events</Link>
      </section>
      <section className="about">
        <h2>Welcome to the Communion App</h2>
        <p>
          This app is designed to bring people together through shared events and community initiatives.
          Whether you're looking for religious gatherings, social events, or opportunities to contribute to charity,
          you'll find something here.
        </p>
      </section>
    </div>
 );
}

export default HomePage;







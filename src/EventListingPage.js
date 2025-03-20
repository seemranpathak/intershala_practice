import React, { useState } from 'react';

function EventListingPage() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Prayer', date: '2024-03-15', location: 'Local Church', category: 'Religious', description: 'Join us for a community prayer session.' },
    { id: 2, title: 'Charity Walk', date: '2024-03-22', location: 'City Park', category: 'Charity', description: 'Participate in a charity walk to raise funds.' },
    { id: 3, title: 'Social Gathering', date: '2024-03-29', location: 'Community Hall', category: 'Social', description: 'Enjoy a social gathering with food and music.' },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', date: '',location: '', category: 'Religious' });
  const [filterCategory, setFilterCategory] = useState('All');

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({ title: '', date: '',location: '', category: 'Religious' });
  };

  const filteredEvents = filterCategory === 'All'
    ? events
    : events.filter((event) => event.category === filterCategory);

  return (
    <div className="event-listing-page">
      <h2>Event Listing</h2>
      <div className="filter">
        <label>Filter by Category:</label>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Category: {event.category}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>

      <div className="add-event">
        <h3>Add New Event</h3>
        <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleInputChange} />
        <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} />
        <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
        <select name="category" value={newEvent.category} onChange={handleInputChange}>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <input type="text" name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default EventListingPage;


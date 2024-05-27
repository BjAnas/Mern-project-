import React, { useState } from 'react';

const MountainHikeBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour soumettre la réservation
    console.log('Date sélectionnée :', selectedDate);
    console.log('Heure sélectionnée :', selectedTime);
  };

  return (
    <div>
      <h2>Réservation de randonnée en montagne</h2>
      <p>Partez à l'aventure avec notre expérience de randonnée en montagne guidée par des experts locaux !</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure :</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default MountainHikeBooking;
